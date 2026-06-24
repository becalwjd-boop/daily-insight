import { unstable_noStore as noStore } from "next/cache";
import AutoRefresh from "./AutoRefresh";

export const dynamic = "force-dynamic";

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

function formatNewsDate(pubDate: string) {
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

function formatNewsTime(pubDate: string) {
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

  return `${year}.${month}.${day}`;
}

function cleanTitle(title: string) {
  return title
    .replace(/<[^>]*>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeTitle(title: string) {
  return cleanTitle(title)
    .replace(/[^\w가-힣]/g, "")
    .replace(/속보/g, "")
    .replace(/단독/g, "")
    .slice(0, 35);
}

function removeDuplicateNews(items: any[]) {
  const seenLinks = new Set<string>();
  const seenTitles = new Set<string>();

  return items.filter((item) => {
    const link = item.originallink || item.link;
    const titleKey = normalizeTitle(item.title);

    if (seenLinks.has(link)) return false;
    if (seenTitles.has(titleKey)) return false;

    seenLinks.add(link);
    seenTitles.add(titleKey);

    return true;
  });
}

function getNewsBadge(title: string) {
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

async function fetchNaverNews(queryText: string, display = 30) {
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

async function getNewsByCategory(category: { name: string; query: string }) {
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

function getRealtimeNews(categories: { name: string; items: any[] }[]) {
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

function NewsBadge({ title }: { title: string }) {
  const badge = getNewsBadge(title);

  if (!badge) return null;

  return (
    <span
      className={`mr-2 inline-flex h-[18px] w-[34px] items-center justify-center rounded-full border text-[10px] font-semibold leading-[18px] ${badge.className}`}
    >
      <span className="translate-y-[-0.5px]">
        {badge.label}
      </span>
    </span>
  );
}

function removeBadgeTextFromTitle(title: string) {
  return title
    .replace(/\[속보\]/g, "")
    .replace(/\[단독\]/g, "")
    .replace(/속보/g, "")
    .replace(/단독/g, "")
    .trim();
}

const imageCache = new Map<string, string | null>();

async function fetchThumbnailImage(url: string) {
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

async function addThumbnails(items: any[]) {
  return Promise.all(
    items.map(async (item) => {
      const url = item.originallink || item.link;
      const imageUrl = await fetchThumbnailImage(url);

      return {
        ...item,
        imageUrl,
      };
    })
  );
}

function NewsThumbnail({ item }: { item: any }) {
  const thumbnailClass =
    "h-12 w-12 shrink-0 rounded-xl object-cover sm:h-14 sm:w-14 lg:h-16 lg:w-16";

  if (!item.imageUrl) {
    return <div className={thumbnailClass} />;
  }

  return (
    <img
      src={item.imageUrl}
      alt={cleanTitle(item.title)}
      className={thumbnailClass}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  );
}
export default async function Home() {
  noStore();

  const categories = await Promise.all(
    categoryKeywords.map((category) => getNewsByCategory(category))
  );

  const realtimeNews = getRealtimeNews(categories);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#111827]">
      <AutoRefresh />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-blue-600">
            AI NEWS CURATION PLATFORM
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Daily Insight
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            뉴스 API를 활용해 주요 분야별 최신 뉴스를 자동으로 수집하는
            실시간 뉴스 대시보드입니다.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="/archive"
              className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              아카이브 보기
            </a>
          </div>
        </header>

        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                REALTIME NEWS
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                실시간 최신 뉴스
              </h2>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              20 articles
            </span>
          </div>

          <ul className="space-y-4">
            {realtimeNews.map((item: any, index: number) => (
              <li
                key={`realtime-${index}`}
                className="border-b border-gray-100 pb-4 last:border-0"
              >
                <a
                  href={item.originallink || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3"
                >
                  <NewsThumbnail item={item} />

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs text-gray-400">
                      {item.categoryName} · {formatNewsDate(item.pubDate)}{" "}
                      {formatNewsTime(item.pubDate)}
                    </p>

                    <p className="text-base font-medium leading-relaxed hover:text-blue-600">
                      <span className="mr-2 font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <NewsBadge title={item.title} />

                      <span
                        dangerouslySetInnerHTML={{
                          __html: removeBadgeTextFromTitle(item.title),
                        }}
                      />
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500">
            TODAY BRIEFING
          </p>
          <h2 className="mt-2 text-2xl font-bold">
            카테고리별 주요 뉴스
          </h2>
        </div>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const firstItems = category.items.slice(0, 10);
            const moreItems = category.items.slice(10, 20);

            return (
              <article
                key={category.name}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{category.name}</h3>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                    {category.items.length} articles
                  </span>
                </div>

                <ul className="space-y-4">
                  {firstItems.map((item: any, index: number) => (
                    <li
                      key={`${category.name}-${index}`}
                      className="border-b border-gray-100 pb-4 last:border-0"
                    >
                      <a
                        href={item.originallink || item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-3"
                      >
                        <NewsThumbnail item={item} />

                        <div className="min-w-0 flex-1"></div>
                        <p className="mb-1 text-xs text-gray-400">
                          {formatNewsDate(item.pubDate)}{" "}
                          {formatNewsTime(item.pubDate)}
                        </p>

                        <p className="text-base font-medium leading-relaxed group-hover:text-blue-600">
                          <span className="mr-2 font-bold text-blue-600">
                            {String(index + 1).padStart(2, "0")}.
                          </span>

                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.title,
                            }}
                          />
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>

                {moreItems.length > 0 && (
                  <details className="mt-4 group">
                    <summary className="cursor-pointer list-none rounded-2xl bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition hover:bg-gray-100">
                      <span className="group-open:hidden">
                        {category.name} 뉴스 더 보기
                      </span>
                      <span className="hidden group-open:inline">
                        {category.name} 뉴스 접기
                      </span>
                    </summary>

                    <ul className="mt-4 space-y-4">
                      {moreItems.map((item: any, index: number) => (
                        <li
                          key={`${category.name}-more-${index}`}
                          className="border-b border-gray-100 pb-4 last:border-0"
                        >
                          <a
                            href={item.originallink || item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3"
                          >
                            <NewsThumbnail item={item} />

                            <div className="min-w-0 flex-1">
                              <p className="mb-1 text-xs text-gray-400">
                                {formatNewsDate(item.pubDate)}{" "}
                                {formatNewsTime(item.pubDate)}
                              </p>

                              <p className="text-base font-medium leading-relaxed hover:text-blue-600">
                                <span className="mr-2 font-bold text-blue-600">
                                  {String(index + 11).padStart(2, "0")}.
                                </span>

                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.title,
                                  }}
                                />
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            );
          })}
        </section>

        <footer className="mt-10 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <a href="/privacy" className="mr-4 hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </footer>
      </section>
    </main>
  );
}