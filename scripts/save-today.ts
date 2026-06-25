import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: ".env.local" });

import {
    categoryKeywords,
    fetchNaverNews,
    removeDuplicateNews,
    cleanTitle,
    addThumbnails,
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

function getKoreaTodayHyphen() {
    return formatArchiveDate(new Date().toISOString());
}

function getArticleKey(article: any) {
    return article.url || article.title;
}

async function getArchiveArticlesByCategory(category: {
    name: string;
    query: string;
}) {
    let items: any[] = [];

    if (category.name === "부동산") {
        const realEstateQueries = [
            "아파트 집값 전세 매매",
            "재건축 재개발 리모델링",
            "청약 분양 분양가 입주",
            "1기 신도시 공공기여금",
            "부동산 정책 대출 세금",
        ];

        const results = await Promise.all(
            realEstateQueries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else {
        items = await fetchNaverNews(category.query, 100);
    }

    const today = getKoreaTodayHyphen();

    const dedupedItems = removeDuplicateNews(items);

    const todayItems = dedupedItems
        .filter((item: any) => formatArchiveDate(item.pubDate) === today)
        .sort(
            (a: any, b: any) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

    const withThumbnails = await addThumbnails(todayItems);

    return withThumbnails.map((item: any) => ({
        category: category.name,
        title: cleanTitle(item.title),
        url: item.originallink || item.link || item.url,
        pubDate: item.pubDate,
        imageUrl: item.imageUrl || null,
    }));
}

async function main() {
    const date = getKoreaTodayHyphen();

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

    const newArticlesByCategory = await Promise.all(
        categoryKeywords.map((category) => getArchiveArticlesByCategory(category))
    );

    const newArticles = newArticlesByCategory.flat();

    const mergedArticles = [...existingArticles, ...newArticles];

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

    const archiveData = {
        date,
        updatedAt: new Date().toISOString(),
        articles: uniqueArticles,
    };

    fs.writeFileSync(filePath, JSON.stringify(archiveData, null, 2), "utf-8");

    console.log(`${date} 뉴스 ${uniqueArticles.length}개 저장 완료`);
}

main();