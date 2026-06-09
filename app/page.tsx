const categoryKeywords = [
  {
    name: "경제",
    query: "경제 물가 수출 무역 반도체",
  },
  {
    name: "금융",
    query: "코스피 코스닥 금리 ETF 비트코인",
  },
  {
    name: "기업",
    query: "삼성전자 SK하이닉스 현대차 LG TSMC",
  },
  {
    name: "부동산",
    query: "서울 아파트 전세 매매 재건축",
  },
  {
    name: "사회",
    query: "사회 사건 사고 복지 교육 노동",
  },
  {
    name: "국제",
    query: "미국 중국 일본 유럽 중동 국제",
  },
];

async function getNewsByCategory(category: { name: string; query: string }) {
  const res = await fetch(
    `http://localhost:3000/api/news?query=${encodeURIComponent(category.query)}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return {
    name: category.name,
    items: data.items || [],
  };
}

async function getBreakingNews() {
  const res = await fetch("http://localhost:3000/api/breaking", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.items || [];
}

export default async function Home() {
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
            네이버 뉴스 API를 활용해 주요 분야별 최신 뉴스를 자동으로 수집하는
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
                    🔥 주요 기사
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
                      <span className="mb-2 block text-xs font-semibold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p
                        className="text-base font-medium leading-relaxed group-hover:text-blue-600"
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}
                      />
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