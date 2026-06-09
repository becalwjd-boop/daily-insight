require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");

const categoryKeywords = [
  { name: "경제", query: "경제 물가 수출 무역 반도체" },
  { name: "금융", query: "코스피 코스닥 금리 ETF 비트코인" },
  { name: "기업", query: "삼성전자 SK하이닉스 현대차 LG TSMC" },
  { name: "부동산", query: "서울 아파트 전세 매매 재건축" },
  { name: "사회", query: "사회 사건 사고 복지 교육 노동" },
  { name: "국제", query: "미국 중국 일본 유럽 중동 국제" },
];

async function fetchNaverNews(queryText) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent(queryText);
  const url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&sort=date`;

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
  const now = new Date();
  const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const date = koreaTime.toISOString().slice(0, 10);

  const allArticles = [];

  for (const category of categoryKeywords) {
    const items = await fetchNaverNews(category.query);

    for (const item of items) {
      allArticles.push({
        category: category.name,
        title: item.title.replace(/<[^>]*>/g, ""),
        url: item.originallink || item.link,
        pubDate: item.pubDate,
      });
    }
  }

  const archiveData = {
    date,
    createdAt: koreaTime.toISOString(),
    articles: allArticles,
  };

  const archiveDir = path.join(process.cwd(), "data", "archives");

  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  const filePath = path.join(archiveDir, `${date}.json`);

  fs.writeFileSync(filePath, JSON.stringify(archiveData, null, 2), "utf-8");

  console.log(`${date} 뉴스 ${allArticles.length}개 저장 완료`);
}

main();