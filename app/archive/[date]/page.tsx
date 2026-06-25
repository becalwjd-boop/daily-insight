import fs from "fs";
import path from "path";
import ArchiveCategory from "./ArchiveCategory";
import CategoryShortcut from "@/app/CategoryShortcut";
import ScrollToTopButton from "@/app/ScrollToTopButton";

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

      <ScrollToTopButton />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-3 text-sm font-semibold text-blue-600">
          DAILY ARCHIVE
        </p>

        <h1 className="mb-4 text-5xl font-bold">{archiveData.date}</h1>

        <p className="mb-8 text-gray-500">
          해당 날짜에 저장된 뉴스 기사입니다.
        </p>

        <CategoryShortcut />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {groupedArticles.map((group) => (
            <ArchiveCategory
              key={group.category}
              category={group.category}
              articles={group.articles}
            />
          ))}
        </section>
      </section>
    </main>
  );
}