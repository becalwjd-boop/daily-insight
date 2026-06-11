const fs = require("fs");
const path = require("path");

const archiveDir = path.join(
  process.cwd(),
  "data",
  "archives"
);

const files = fs
  .readdirSync(archiveDir)
  .filter((file) => file.endsWith(".json"));

for (const file of files) {
  const filePath = path.join(archiveDir, file);

  const data = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const targetDate = data.date;

  const filteredArticles = data.articles.filter((article) => {
    if (!article.pubDate) return false;

    const parsedDate = new Date(article.pubDate);

    if (isNaN(parsedDate.getTime())) {
        return false;
    }

    const articleDate = parsedDate.toISOString().slice(0, 10);

    return articleDate === targetDate;
    });

  data.articles = filteredArticles;

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2),
    "utf8"
  );

  console.log(
    `${file} → ${filteredArticles.length}개 기사 유지`
  );
}

console.log("정리 완료");