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

    if (category.name === "경제") {
        const queries = [
            "경제 성장률 GDP",
            "물가 소비자물가",
            "수출 무역",
            "고용 실업",
            "한국은행 경제",
            "정부 경제정책",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();

    } else if (category.name === "금융") {
        const queries = [
            "코스피 코스닥",
            "환율 달러 원화",
            "금리 채권",
            "증권 ETF",
            "은행 금융",
            "비트코인 가상자산",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();

    } else if (category.name === "부동산") {
        const queries = [
            "아파트 집값 전세 매매",
            "재건축 재개발 리모델링",
            "청약 분양 분양가 입주",
            "1기 신도시 공공기여금",
            "부동산 정책 대출 세금",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else if (category.name === "사회") {
        const queries = [
            "사회",
            "사건 사고",
            "법원 검찰",
            "경찰",
            "교육",
            "복지",
            "노동",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else if (category.name === "국제") {
        const queries = [
            "미국 중국",
            "일본",
            "유럽",
            "중동",
            "러시아 우크라이나",
            "국제 외교",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else if (category.name === "기업") {
        const queries = [
            "삼성전자 SK하이닉스",
            "현대차 기아",
            "LG 배터리",
            "네이버 카카오",
            "기업 실적",
            "AI 반도체",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else if (category.name === "스포츠") {
        const queries = [
            "축구 손흥민 이강인",
            "야구 KBO 류현진 김하성",
            "농구 배구",
            "골프 테니스",
            "MLB EPL K리그",
            "월드컵 대표팀",
        ];

        const results = await Promise.all(
            queries.map((query) => fetchNaverNews(query, 100))
        );

        items = results.flat();
    } else {
        items = await fetchNaverNews(category.query, 100);
    }

    const today = getKoreaTodayHyphen();
    const dedupedItems = removeDuplicateNews(items);

    let filteredItems = dedupedItems;

    if (category.name === "스포츠") {
        const sportsPositive = [
            "축구", "야구", "농구", "배구", "골프", "테니스",
            "KBO", "MLB", "EPL", "K리그", "NBA",
            "손흥민", "이강인", "김민재", "류현진", "김하성", "오타니",
            "선수", "감독", "경기", "리그", "월드컵",
        ];

        const sportsNegative = [
            "e스포츠", "E스포츠", "게임", "LOL", "리그오브레전드",
            "발로란트", "배틀그라운드", "배우", "드라마", "영화",
            "예능", "홍석천", "아이돌", "가수",
        ];

        filteredItems = dedupedItems.filter((item: any) => {
            const title = cleanTitle(item.title);
            return (
                sportsPositive.some((word) => title.includes(word)) &&
                !sportsNegative.some((word) => title.includes(word))
            );
        });
    }

    if (category.name === "기업") {
        const companyNegative = [
            "코스피", "코스닥", "증시", "ETF", "환율",
            "금리", "주가", "상승", "하락", "외국인", "기관", "개미",
        ];

        filteredItems = dedupedItems.filter((item: any) => {
            const title = cleanTitle(item.title);
            return !companyNegative.some((word) => title.includes(word));
        });
    }

    const todayItems = filteredItems
        .filter((item: any) => formatArchiveDate(item.pubDate) === today)
        .sort(
            (a: any, b: any) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

    console.log(
        category.name,
        "전체:",
        items.length,
        "중복제거:",
        dedupedItems.length,
        "오늘:",
        todayItems.length
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

    const newArticlesByCategory = [];

    for (const category of categoryKeywords) {
        const result = await getArchiveArticlesByCategory(category);
        newArticlesByCategory.push(result);
    }

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