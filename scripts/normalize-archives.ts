import fs from "fs";
import path from "path";

const ARCHIVE_START_DATE = "2026-06-09";
const MAX_ARTICLES_PER_CATEGORY = 100;

function getArticleKey(article: any) {
    return article.url || article.title;
}

function normalizeDateFromFileName(fileName: string) {
    return fileName.replace(".json", "");
}

function isDateInScope(date: string) {
    return date >= ARCHIVE_START_DATE;
}

function normalizeArchive(filePath: string) {
    const fileName = path.basename(filePath);
    const date = normalizeDateFromFileName(fileName);

    if (!isDateInScope(date)) {
        return null;
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);

    const articles = Array.isArray(data.articles) ? data.articles : [];

    const dedupedArticles = Array.from(
        new Map(
            articles.map((article: any) => [getArticleKey(article), article])
        ).values()
    ).sort(
        (a: any, b: any) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );

    const limitedArticles = Object.values(
        dedupedArticles.reduce((acc: Record<string, any[]>, article: any) => {
            const category = article.category || "기타";

            if (!acc[category]) {
                acc[category] = [];
            }

            if (acc[category].length < MAX_ARTICLES_PER_CATEGORY) {
                acc[category].push(article);
            }

            return acc;
        }, {})
    ).flat();

    const normalizedData = {
        ...data,
        date: data.date || date,
        updatedAt: data.updatedAt || new Date().toISOString(),
        articles: limitedArticles,
    };

    fs.writeFileSync(
        filePath,
        JSON.stringify(normalizedData, null, 2),
        "utf-8"
    );

    return {
        date,
        before: articles.length,
        after: limitedArticles.length,
    };
}

function main() {
    const archiveDir = path.join(process.cwd(), "data", "archives");

    if (!fs.existsSync(archiveDir)) {
        console.log("Archive directory does not exist.");
        return;
    }

    const files = fs
        .readdirSync(archiveDir)
        .filter((file) => file.endsWith(".json"))
        .sort();

    const results = [];

    for (const file of files) {
        const filePath = path.join(archiveDir, file);
        const result = normalizeArchive(filePath);

        if (result) {
            results.push(result);
        }
    }

    console.table(results);
    console.log("Archive normalization completed.");
}

main();