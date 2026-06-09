import fs from "fs";
import path from "path";

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

  let archiveData = null;

  try {
    const fileContents = fs.readFileSync(
      filePath,
      "utf-8"
    );

    archiveData = JSON.parse(fileContents);
  } catch (error) {
    return (
      <main className="min-h-screen bg-[#f6f7f9]">
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h1 className="text-4xl font-bold">
            데이터를 찾을 수 없습니다.
          </h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9]">
      <section className="mx-auto max-w-5xl px-6 py-10">
        <p className="mb-3 text-sm font-semibold text-blue-600">
          DAILY ARCHIVE
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          {archiveData.date}
        </h1>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <ul className="space-y-4">
            {archiveData.articles.map(
              (article: any, index: number) => (
                <li
                  key={index}
                  className="border-b border-gray-100 pb-4"
                >
                  <div className="text-sm text-blue-600">
                    {article.category}
                  </div>

                  <a
                    href={article.url}
                    target="_blank"
                    className="font-medium hover:text-blue-600"
                  >
                    {article.title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}