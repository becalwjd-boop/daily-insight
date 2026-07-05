import AutoRefresh from "./AutoRefresh";
import CategoryShortcut from "./CategoryShortcut";
import ScrollToTopButton from "./ScrollToTopButton";
import SmartThumbnail from "./SmartThumbnail";
import ShareCategoryButton from "./ShareCategoryButton";

import {
  categoryKeywords,
  formatNewsDate,
  formatNewsTime,
  getNewsByCategory,
  getRealtimeNews,
  getNewsBadge,
  cleanTitle,
  removeBadgeTextFromTitle,
} from "@/lib/news";

export const revalidate = 300;


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

function NewsThumbnail({ item }: { item: any }) {
  return (
    <SmartThumbnail
      src={item.imageUrl}
      title={item.title}
      className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
    />
  );
}

export default async function Home() {

  const categoryGroups = [
    categoryKeywords.slice(0, 3),
    categoryKeywords.slice(3, 6),
    categoryKeywords.slice(6, 8),
  ];

  const categories = [];

  for (const group of categoryGroups) {
    const groupResults = await Promise.all(
      group.map((category) => getNewsByCategory(category))
    );

    categories.push(...groupResults);
  }

  const realtimeNews = getRealtimeNews(categories);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#111827]">
      <AutoRefresh />
      <ScrollToTopButton />

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

            <ShareCategoryButton
              buttonText="전체 헤드라인 복사"
              variant="primary"
              groups={[
                { categoryName: "실시간 최신 뉴스", items: realtimeNews },
                ...categories.map((category) => ({
                  categoryName: category.name,
                  items: category.items,
                })),
              ]}
            />
          </div>

          <CategoryShortcut />
        </header>

        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <div className="relative mb-5">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                REALTIME NEWS
              </p>

              <h2 className="mt-2 whitespace-nowrap text-2xl font-bold">
                실시간 최신 뉴스
              </h2>
            </div>

            <div className="absolute right-0 top-0 flex items-center gap-2">
              <ShareCategoryButton
                categoryName="실시간 최신 뉴스"
                items={realtimeNews}
                buttonText="헤드라인 복사"
              />

              <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm font-semibold text-gray-500">
                20 articles
              </span>
            </div>
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
                id={`category-${category.name}`}
                key={category.name}
                className="scroll-mt-6 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold">{category.name}</h3>

                  <div className="flex items-center gap-2">
                    <ShareCategoryButton
                      categoryName={category.name}
                      items={category.items}
                    />

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                      {category.items.length} articles
                    </span>
                  </div>
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

                        <div className="min-w-0 flex-1">
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
                        </div>
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
    </main >
  );
}