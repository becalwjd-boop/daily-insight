export const categoryKeywords = [
  { name: "경제", query: "경제 물가 수출 금리" },
  { name: "금융", query: "코스피 환율 금리 증시" },
  { name: "기업", query: "삼성전자 SK하이닉스 현대차" },

  {
    name: "부동산",
    query: "",
  },

  { name: "사회", query: "사회 사건 사고 교육 노동 복지 의료 법원 경찰" },
  { name: "국제", query: "미국 중국 일본 트럼프" },
  { name: "연예", query: "연예" },
  { name: "스포츠", query: "스포츠" },
];

export function formatNewsDate(pubDate: string) {
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

  return `${year}.${month}.${day}`;
}

export function formatNewsTime(pubDate: string) {
  const date = new Date(pubDate);

  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const hour = parts.find((p) => p.type === "hour")?.value;
  const minute = parts.find((p) => p.type === "minute")?.value;

  return `${hour}:${minute}`;
}

export function getKoreaTodayString() {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  return `${year}.${month}.${day}`;
}

export function cleanTitle(title: string) {
  return title
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeTitle(title: string) {
  return cleanTitle(title)
    .replace(/[^\w가-힣]/g, "")
    .replace(/속보/g, "")
    .replace(/단독/g, "")
    .slice(0, 35);
}

export function removeDuplicateNews(items: any[] = []) {
  const seenLinks = new Set<string>();
  const seenTitles = new Set<string>();

  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .filter(Boolean)
    .filter((item) => {
      const link = item.originallink || item.link || item.url || "";
      const titleKey = normalizeTitle(item.title || "");

      if (!link && !titleKey) return false;

      if (link && seenLinks.has(link)) return false;
      if (titleKey && seenTitles.has(titleKey)) return false;

      if (link) seenLinks.add(link);
      if (titleKey) seenTitles.add(titleKey);

      return true;
    });
}

export function getNewsBadge(title: string) {
  const clean = cleanTitle(title);

  if (clean.includes("속보")) {
    return {
      label: "속보",
      className: "bg-red-100 text-red-700 border-red-200",
    };
  }

  if (clean.includes("단독")) {
    return {
      label: "단독",
      className: "bg-amber-100 text-amber-700 border-amber-200",
    };
  }

  return null;
}

export function removeBadgeTextFromTitle(title: string) {
  return title
    .replace(/\[속보\]/g, "")
    .replace(/\[단독\]/g, "")
    .replace(/속보/g, "")
    .replace(/단독/g, "")
    .trim();
}

export async function fetchNaverNews(queryText: string, display = 30) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent(queryText);

  try {
    const res = await fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${query}&display=${display}&sort=date`,
      {
        headers: {
          "X-Naver-Client-Id": clientId!,
          "X-Naver-Client-Secret": clientSecret!,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log("Naver API warning:", res.status, queryText);
      return [];
    }

    const data = await res.json();

    return Array.isArray(data.items) ? data.items : [];
  } catch {
    return [];
  }
}

const imageCache = new Map<string, string | null>();

export async function fetchThumbnailImage(url: string) {
  if (!url) return null;

  if (imageCache.has(url)) {
    return imageCache.get(url);
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!res.ok) {
      imageCache.set(url, null);
      return null;
    }

    const html = await res.text();

    const patterns = [
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["'][^>]*>/i,
      /<meta[^>]+property=["']og:image:url["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image:url["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["'][^>]*>/i,
      /<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["'][^>]*>/i,
      /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']image_src["'][^>]*>/i,
      /<meta[^>]+itemprop=["']image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+content=["']([^"']+)["'][^>]+itemprop=["']image["'][^>]*>/i,
    ];

    let imageUrl: string | null = null;

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        imageUrl = match[1].replace(/&amp;/g, "&").trim();
        break;
      }
    }

    if (imageUrl && imageUrl.startsWith("//")) {
      imageUrl = `https:${imageUrl}`;
    }

    if (imageUrl && imageUrl.startsWith("/")) {
      const base = new URL(url);
      imageUrl = `${base.origin}${imageUrl}`;
    }

    imageCache.set(url, imageUrl);

    return imageUrl;
  } catch {
    imageCache.set(url, null);
    return null;
  }
}

export async function fetchThumbnailFromItem(item: any) {
  const candidates = [
    item.link,
    item.originallink,
    item.url,
    item.link?.replace("https://n.news.naver.com", "https://news.naver.com"),
    item.originallink?.replace("http://", "https://"),
    item.url?.replace("http://", "https://"),
  ].filter(Boolean);

  const uniqueCandidates = Array.from(new Set(candidates));

  for (const url of uniqueCandidates) {
    const imageUrl = await fetchThumbnailImage(url);

    if (imageUrl) {
      return imageUrl;
    }
  }

  return null;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchNewsQueriesSequential(queries: string[], display = 30) {
  const allItems: any[] = [];

  for (const query of queries) {
    const items = await fetchNaverNews(query, display);
    allItems.push(...items);
    await wait(400);
  }

  return allItems;
}

export async function addThumbnails(items: any[]) {
  const results: any[] = [];

  for (let i = 0; i < items.length; i += 4) {
    const chunk = items.slice(i, i + 4);

    const chunkResults = await Promise.all(
      chunk.map(async (item) => {
        const imageUrl = await fetchThumbnailFromItem(item);

        return {
          ...item,
          imageUrl,
        };
      })
    );

    results.push(...chunkResults);

    await wait(120);
  }

  return results;
}

async function getNewsByCategoryWithLimit(
  category: {
    name: string;
    query: string;
  },
  limit: number
) {
  let items: any[] = [];

  const display = Math.max(limit, 30);

  if (category.name === "경제") {
    const economyQueries = [
      "경제 성장률 GDP",
      "물가 소비자물가",
      "수출 무역",
      "고용 실업",
      "한국은행 경제",
      "정부 경제정책",
    ];

    items = await fetchNewsQueriesSequential(economyQueries, display);
  } else if (category.name === "금융") {
    const financeQueries = [
      "코스피 코스닥",
      "환율 달러 원화",
      "금리 채권",
      "증권 ETF",
      "은행 금융",
      "비트코인 가상자산",
    ];

    items = await fetchNewsQueriesSequential(financeQueries, display);
  } else if (category.name === "부동산") {
    const realEstateQueries = [
      // 기존
      "아파트 집값 전세 매매",
      "재건축 재개발 리모델링",
      "청약 분양 분양가 입주",
      "1기 신도시 공공기여금",
      "부동산 정책 대출 세금",

      // 추가
      "서울 아파트",
      "수도권 아파트",
      "신축 아파트",
      "재건축",
      "재개발",
      "전세",
      "월세",
      "분양",
      "청약",
      "입주",
      "오피스텔",
      "빌라",
      "토지",
      "상가",
      "집값",
      "매매",
      "부동산 시장",
    ];

    items = await fetchNewsQueriesSequential(realEstateQueries, display);
  } else if (category.name === "사회") {
    const socialQueries = [
      "사회",
      "사건 사고",
      "법원 검찰",
      "경찰",
      "교육",
      "복지",
      "노동",
    ];

    items = await fetchNewsQueriesSequential(socialQueries, display);
  } else if (category.name === "국제") {
    const internationalQueries = [
      "미국 중국",
      "일본",
      "유럽",
      "중동",
      "러시아 우크라이나",
      "국제 외교",
    ];

    items = await fetchNewsQueriesSequential(internationalQueries, display);
  } else if (category.name === "기업") {
    const companyQueries = [
      "삼성전자 SK하이닉스",
      "현대차 기아",
      "LG 배터리",
      "네이버 카카오",
      "기업 실적",
      "AI 반도체",
    ];

    items = await fetchNewsQueriesSequential(companyQueries, display);
  } else if (category.name === "스포츠") {
    const sportsQueries = [
      "축구 손흥민 이강인",
      "야구 KBO 류현진 김하성",
      "농구 배구",
      "골프 테니스",
      "MLB EPL K리그",
      "월드컵 대표팀",
    ];

    items = await fetchNewsQueriesSequential(sportsQueries, display);
  } else {
    items = await fetchNaverNews(category.query, display);
  }

  const todayString = getKoreaTodayString();
  const dedupedItems = removeDuplicateNews(items);

  let filteredItems = dedupedItems;

  if (category.name === "경제") {
    const economyNegative = [
      "코스피",
      "코스닥",
      "증시",
      "ETF",
      "주가",
      "비트코인",
      "가상자산",
      "연예",
      "스포츠",
    ];

    filteredItems = dedupedItems.filter((item: any) => {
      const title = cleanTitle(item.title);
      return !economyNegative.some((word) => title.includes(word));
    });
  }

  if (category.name === "금융") {
    const financeNegative = [
      "연예",
      "스포츠",
      "배우",
      "가수",
      "드라마",
      "영화",
      "예능",
    ];

    filteredItems = dedupedItems.filter((item: any) => {
      const title = cleanTitle(item.title);
      return !financeNegative.some((word) => title.includes(word));
    });
  }

  if (category.name === "스포츠") {
    const sportsPositive = [
      "축구",
      "야구",
      "농구",
      "배구",
      "골프",
      "테니스",
      "KBO",
      "MLB",
      "EPL",
      "K리그",
      "NBA",
      "손흥민",
      "이강인",
      "김민재",
      "류현진",
      "김하성",
      "오타니",
      "선수",
      "감독",
      "경기",
      "리그",
      "월드컵",
    ];

    const sportsNegative = [
      "e스포츠",
      "E스포츠",
      "게임",
      "LOL",
      "리그오브레전드",
      "발로란트",
      "배틀그라운드",
      "배우",
      "드라마",
      "영화",
      "예능",
      "홍석천",
      "아이돌",
      "가수",
    ];

    filteredItems = dedupedItems.filter((item: any) => {
      const title = cleanTitle(item.title);

      return (
        sportsPositive.some((word) => title.includes(word)) &&
        !sportsNegative.some((word) => title.includes(word))
      );
    });
  }

  if (category.name === "부동산") {
    const realEstateWeights: Record<string, number> = {
      아파트: 6,
      실거래가: 6,
      신고가: 6,
      집값: 5,
      전세: 5,
      월세: 5,
      매매: 5,
      청약: 5,
      분양: 5,
      입주: 4,
      재건축: 4,
      재개발: 4,
      리모델링: 3,
      오피스텔: 3,
      빌라: 3,
      토지: 3,
      상가: 3,
      주택: 3,
      공시가격: 3,
      부동산: 2,
      신도시: 2,
    };

    const realEstateNegativeWeights: Record<string, number> = {
      코스피: 6,
      코스닥: 6,
      ETF: 6,
      비트코인: 6,
      가상자산: 6,
      주가: 6,
      증시: 6,
      반도체: 5,
      삼성전자: 5,
      SK하이닉스: 5,
      현대차: 5,
      카카오: 4,
      네이버: 4,
      AI: 4,
      드라마: 4,
      영화: 4,
      예능: 4,
      배우: 4,
      가수: 4,
      스포츠: 4,
    };

    filteredItems = dedupedItems
      .map((item: any) => {
        const title = cleanTitle(item.title);

        let relevanceScore = 0;

        Object.entries(realEstateWeights).forEach(([word, weight]) => {
          if (title.includes(word)) {
            relevanceScore += weight;
          }
        });

        Object.entries(realEstateNegativeWeights).forEach(([word, weight]) => {
          if (title.includes(word)) {
            relevanceScore -= weight;
          }
        });

        return {
          ...item,
          relevanceScore,
        };
      })
      .filter((item: any) => item.relevanceScore > 0)
      .sort((a: any, b: any) => {
        if (b.relevanceScore !== a.relevanceScore) {
          return b.relevanceScore - a.relevanceScore;
        }

        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      });
  }

  if (category.name === "기업") {
    const companyNegative = [
      "코스피",
      "코스닥",
      "증시",
      "ETF",
      "환율",
      "금리",
      "주가",
      "상승",
      "하락",
      "외국인",
      "기관",
      "개미",
    ];

    filteredItems = dedupedItems.filter((item: any) => {
      const title = cleanTitle(item.title);
      return !companyNegative.some((word) => title.includes(word));
    });
  }

  const todayItems = filteredItems
    .filter((item: any) => formatNewsDate(item.pubDate) === todayString)
    .sort(
      (a: any, b: any) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, limit);

  const itemsWithThumbnails = await addThumbnails(todayItems);

  return {
    name: category.name,
    items: itemsWithThumbnails,
  };
}

export async function getNewsByCategory(category: {
  name: string;
  query: string;
}) {
  return getNewsByCategoryWithLimit(category, 20);
}

export async function getNewsByCategoryForArchive(category: {
  name: string;
  query: string;
}) {
  const result = await getNewsByCategoryWithLimit(category, 100);

  return {
    name: result.name,
    items: result.items.map((item: any) => ({
      category: result.name,
      title: cleanTitle(item.title),
      url: item.originallink || item.link || item.url,
      pubDate: item.pubDate,
      imageUrl: item.imageUrl || null,
    })),
  };
}

export function getRealtimeNews(categories: { name: string; items: any[] }[]) {
  const realtimeCategories = ["경제", "금융", "기업", "부동산", "사회", "국제"];

  const allItems = categories
    .filter((category) => realtimeCategories.includes(category.name))
    .flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryName: category.name,
      }))
    )
    .sort((a: any, b: any) => {
      if (a.imageUrl && !b.imageUrl) return -1;
      if (!a.imageUrl && b.imageUrl) return 1;
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

  return removeDuplicateNews(allItems)
    .sort(
      (a: any, b: any) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, 20);
}