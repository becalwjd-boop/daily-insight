import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: ".env.local" });

import {
    categoryKeywords,
    getNewsByCategoryForArchive,
} from "../lib/news";

function formatArchiveDate(pubDate: string) {
    const date = new Date(pubDate);

    const parts = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(date);

    const year = parts.find((p) => p.type === "year")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const day = parts.find((p) => p.type === "day")?.value;

    return `${year}-${month}-${day}`;
}

function getArchiveTargetDate() {
    const now = new Date();

    const parts = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        hour12: false,
    }).formatToParts(now);

    const hour = Number(parts.find((p) => p.type === "hour")?.value || "0");

    const target = new Date(now);

    // GitHub Actions가 지연되어 새벽에 실행되면 전날 아카이브로 저장
    if (hour >= 0 && hour < 3) {
        target.setDate(target.getDate() - 1);
    }

    return formatArchiveDate(target.toISOString());
}

function getArticleKey(article: any) {
    return article.url || article.title;
}

async function main() {
    const date = getArchiveTargetDate();

    const archiveDir = path.join(process.cwd(), "data", "archives");
    const filePath = path.join(archiveDir, `${date}.json`);

    if (!fs.existsSync(archiveDir)) {
        fs.mkdirSync(archiveDir, { recursive: true });
    }

    let existingArticles: any[] = [];

    if (fs.existsSync(filePath)) {
        try {
            const oldData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            existingArticles = oldData.articles || [];
        } catch {
            existingArticles = [];
        }
    }

    const newArticlesByCategory = [];

    for (const category of categoryKeywords) {
        const result = await getNewsByCategoryForArchive(category, date);
        newArticlesByCategory.push(result.items);
    }

    const newArticles = newArticlesByCategory.flat();

    const mergedArticles = [...newArticles, ...existingArticles];

    const uniqueArticles = Array.from(
        new Map(
            mergedArticles.map((article) => [getArticleKey(article), article])
        ).values()
    )
        .filter((article: any) => formatArchiveDate(article.pubDate) === date)
        .sort(
            (a: any, b: any) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

    const limitedArticles = Object.values(
        uniqueArticles.reduce((acc: Record<string, any[]>, article: any) => {
            if (!acc[article.category]) {
                acc[article.category] = [];
            }

            if (acc[article.category].length < 100) {
                acc[article.category].push(article);
            }

            return acc;
        }, {})
    ).flat();

    const archiveData = {
        date,
        updatedAt: new Date().toISOString(),
        articles: limitedArticles,
    };

    fs.writeFileSync(filePath, JSON.stringify(archiveData, null, 2), "utf-8");

    console.log(`${date} 뉴스 ${limitedArticles.length}개 저장 완료`);
}

main();