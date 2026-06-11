require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");

const categoryKeywords = [
  { name: "경제", query: "경제 물가 수출 금리" },
  { name: "금융", query: "코스피 환율 금리 증시" },
  { name: "기업", query: "삼성전자 SK하이닉스 현대차" },
  { name: "부동산", query: "부동산 아파트 청약 재건축" },
  { name: "사회", query: "사회 복지 교육 노동" },
  { name: "국제", query: "미국 중국 일본 트럼프" },
];

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
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  return `${year}-${month}-${day}`;
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

async function main() {
  const date = getKoreaTodayString();

  const allArticles = [];

  for (const category of categoryKeywords) {
    const items = await fetchNaverNews(category.query);

    for (const item of items) {
      const articleDate = formatNewsDate(item.pubDate);

      if (articleDate !== date) continue;

      allArticles.push({
        category: category.name,
        title: item.title.replace(/<[^>]*>/g, ""),
        url: item.originallink || item.link,
        pubDate: item.pubDate,
      });
    }
  }

  const uniqueArticles = Array.from(
    new Map(
      allArticles.map((article) => [
        article.url || article.title,
        article,
      ])
    ).values()
  );

  const archiveData = {
    date,
    createdAt: new Date().toISOString(),
    articles: uniqueArticles,
  };

  const archiveDir = path.join(process.cwd(), "data", "archives");

  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  const filePath = path.join(archiveDir, `${date}.json`);

  fs.writeFileSync(filePath, JSON.stringify(archiveData, null, 2), "utf-8");

  console.log(`${date} 뉴스 ${uniqueArticles.length}개 저장 완료`);
}

main();