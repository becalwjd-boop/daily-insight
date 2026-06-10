import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

const categoryKeywords = [
  { name: "경제", query: "경제 물가 수출 금리" },
  { name: "금융", query: "코스피 환율 금리 증시" },
  { name: "기업", query: "삼성전자 SK하이닉스 현대차" },
  { name: "부동산", query: "부동산 아파트 청약 재건축" },
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

async function getNewsByCategory(category: { name: string; query: string }) {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent(category.query);

  const res = await fetch(
    `https://openapi.naver.com/v1/search/news.json?query=${query}&display=30&sort=date`,
    {
      headers: {
        "X-Naver-Client-Id": clientId!,
        "X-Naver-Client-Secret": clientSecret!,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  const items = data.items || [];

  const todayString = getKoreaTodayString();


  const todayItems = items.filter(
    (item: any) => formatNewsDate(item.pubDate) === todayString
  );

  const recentItems = items.filter(
    (item: any) => formatNewsDate(item.pubDate) !== todayString
  );

  const sortedItems = [...todayItems, ...recentItems].slice(0, 10);

  return {
    name: category.name,
    items: sortedItems,
  };
}

async function getBreakingNews() {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  const query = encodeURIComponent("속보 긴급");

  const res = await fetch(
    `https://openapi.naver.com/v1/search/news.json?query=${query}&display=5&sort=date`,
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

export default async function Home() {
  noStore();

  const breakingNews = await getBreakingNews();

  const categories = await Promise.all(
    categoryKeywords.map((category) => getNewsByCategory(category))
  );

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#111827]">
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

        <section className="mb-8 rounded-3xl bg-black p-6 text-white shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-red-400">
                BREAKING NEWS
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                긴급 속보
              </h2>
            </div>

            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              LIVE
            </span>
          </div>

          <ul className="space-y-3">
            {breakingNews.map((item: any, index: number) => (
              <li
                key={`breaking-${index}`}
                className="border-b border-white/10 pb-3 last:border-0"
              >
                <a
                  href={item.originallink || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="mr-2 text-sm font-bold text-red-400">
                    속보 {index + 1}
                  </span>

                  <span
                    className="font-medium group-hover:text-red-300"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  />
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
            오늘의 주요 뉴스 헤드라인
          </h2>
        </div>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
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
              

              {category.items[0] && (
                <a
                  href={category.items[0].originallink || category.items[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 block rounded-2xl bg-gray-50 p-4 transition hover:bg-gray-100"
                >
                  <p className="mb-2 text-sm font-bold text-red-500">
                    🔥 주요 기사 · {formatNewsDate(category.items[0].pubDate)}
                  </p>

                  <p
                    className="font-bold leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: category.items[0].title,
                    }}
                  />
                </a>
              )}

              <ul className="space-y-4">
                {category.items.slice(1).map((item: any, index: number) => (
                  <li
                    key={`${category.name}-${index}`}
                    className="border-b border-gray-100 pb-4 last:border-0"
                  >
                    <a
                      href={item.originallink || item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <p className="mb-1 text-xs text-gray-400">
                        {formatNewsDate(item.pubDate)}
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
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}