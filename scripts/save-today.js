require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");

const categoryKeywords = [
  { name: "경제", query: "경제 물가 수출 금리" },
  { name: "금융", query: "코스피 환율 금리 증시" },
  { name: "기업", query: "삼성전자 SK하이닉스 현대차" },

  {
    name: "부동산",
    query: "",
  },

  { name: "사회", query: "사회 복지 교육 노동" },
  { name: "국제", query: "미국 중국 일본 트럼프" },
];

function cleanText(text = "") {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function formatNewsDate(pubDate) {
  if (!pubDate) return null;

  const date = new Date(pubDate);
  if (isNaN(date.getTime())) return null;

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

function getKoreaTodayString() {
  return formatNewsDate(new Date().toUTCString());
}

async function fetchNaverNews(queryText) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent(queryText);
  const url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=100&sort=date`;

  const response = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  });

  const data = await response.json();
  return data.items || [];
}

function getArticleKey(article) {
  return article.url || article.title;
}

async function main() {
  const date = getKoreaTodayString();

  const archiveDir = path.join(process.cwd(), "data", "archives");
  const filePath = path.join(archiveDir, `${date}.json`);

  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  let existingArticles = [];

  if (fs.existsSync(filePath)) {
    try {
      const oldData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      existingArticles = oldData.articles || [];
    } catch (error) {
      existingArticles = [];
    }
  }

  const newArticles = [];

  for (const category of categoryKeywords) {
    const items = await fetchNaverNews(category.query);

    for (const item of items) {
      const articleDate = formatNewsDate(item.pubDate);

      if (articleDate !== date) continue;

      newArticles.push({
        category: category.name,
        title: cleanText(item.title),
        url: item.originallink || item.link,
        pubDate: item.pubDate,
      });
    }
  }

  const mergedArticles = [...existingArticles, ...newArticles];

  const uniqueArticles = Array.from(
    new Map(
      mergedArticles.map((article) => [getArticleKey(article), article])
    ).values()
  )
    .filter((article) => formatNewsDate(article.pubDate) === date)
    .sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

  const archiveData = {
    date,
    updatedAt: new Date().toISOString(),
    articles: uniqueArticles,
  };

  fs.writeFileSync(filePath, JSON.stringify(archiveData, null, 2), "utf-8");

  console.log(`${date} 뉴스 ${uniqueArticles.length}개 저장 완료`);
}

main();