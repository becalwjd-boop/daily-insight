export const categoryKeywords = [
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

export function removeDuplicateNews(items: any[]) {
  const seenLinks = new Set<string>();
  const seenTitles = new Set<string>();

  return items.filter((item) => {
    const link = item.originallink || item.link || item.url;
    const titleKey = normalizeTitle(item.title);

    if (seenLinks.has(link)) return false;
    if (seenTitles.has(titleKey)) return false;

    seenLinks.add(link);
    seenTitles.add(titleKey);

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

  const data = await res.json();

  return data.items || [];
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

export async function addThumbnails(items: any[]) {
  return Promise.all(
    items.map(async (item) => {
      const imageUrl = await fetchThumbnailFromItem(item);

      return {
        ...item,
        imageUrl,
      };
    })
  );
}

export async function getNewsByCategory(category: { name: string; query: string }) {
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
      realEstateQueries.map((query) => fetchNaverNews(query, 30))
    );

    items = results.flat();
  } else {
    items = await fetchNaverNews(category.query, 30);
  }

  const todayString = getKoreaTodayString();

  const dedupedItems = removeDuplicateNews(items);

  const todayItems = dedupedItems
    .filter((item: any) => formatNewsDate(item.pubDate) === todayString)
    .sort(
      (a: any, b: any) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, 20);

  const itemsWithThumbnails = await addThumbnails(todayItems);

  return {
    name: category.name,
    items: itemsWithThumbnails,
  };
}

export function getRealtimeNews(categories: { name: string; items: any[] }[]) {
  const allItems = categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryName: category.name,
    }))
  );

  return removeDuplicateNews(allItems)
    .sort(
      (a: any, b: any) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, 20);
}