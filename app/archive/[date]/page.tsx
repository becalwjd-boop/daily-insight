import fs from "fs";
import path from "path";

const categoryOrder = ["경제", "금융", "기업", "부동산", "사회", "국제"];

export default async function ArchiveDatePage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  const filePath = path.join(
    process.cwd(),
    "data",
    "archives",
    `${date}.json`
  );

  let archiveData: any = null;

  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    archiveData = JSON.parse(fileContents);
  } catch (error) {
    return (
      <main className="min-h-screen bg-[#f6f7f9]">
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-4xl font-bold">데이터를 찾을 수 없습니다.</h1>
        </section>
      </main>
    );
  }

  const groupedArticles = categoryOrder.map((category) => ({
    category,
    articles: (archiveData.articles || []).filter(
      (article: any) => article.category === category
    ),
  }));

  return (
    <main className="min-h-screen bg-[#f6f7f9]">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-3 text-sm font-semibold text-blue-600">
          DAILY ARCHIVE
        </p>

        <h1 className="mb-4 text-5xl font-bold">{archiveData.date}</h1>

        <p className="mb-8 text-gray-500">
          해당 날짜에 저장된 뉴스 기사입니다.
        </p>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groupedArticles.map((group) => (
            <article
              key={group.category}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">{group.category}</h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                  {group.articles.length} articles
                </span>
              </div>

              {group.articles.length === 0 ? (
                <p className="text-sm text-gray-400">
                  저장된 기사가 없습니다.
                </p>
              ) : (
                <ul className="space-y-4">
                  {group.articles.map((article: any, index: number) => (
                    <li
                      key={`${group.category}-${index}`}
                      className="border-b border-gray-100 pb-4 last:border-0"
                    >
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <p className="text-base font-medium leading-relaxed group-hover:text-blue-600">
                          <span className="mr-2 font-bold text-blue-600">
                            {String(index + 1).padStart(2, "0")}.
                          </span>
                          {article.title}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}