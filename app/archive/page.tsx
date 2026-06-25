import fs from "fs";
import path from "path";
import ArchiveList from "./ArchiveList";
import ScrollToTopButton from "../ScrollToTopButton";

export default function ArchivePage() {
  const archiveDir = path.join(process.cwd(), "data", "archives");

  let archives: { date: string; count: number }[] = [];

  try {
    const files = fs
      .readdirSync(archiveDir)
      .filter((file) => file.endsWith(".json"))
      .sort()
      .reverse();

    archives = files.map((file) => {
      const filePath = path.join(archiveDir, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileContents);

      return {
        date: data.date,
        count: data.articles?.length || 0,
      };
    });
  } catch (error) {
    archives = [];
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9]">

      <ScrollToTopButton />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-3 text-5xl font-bold">뉴스 아카이브</h1>

        <p className="mb-8 text-gray-500">
          저장된 날짜별 뉴스 목록입니다.
        </p>

        {archives.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            아직 저장된 뉴스가 없습니다.
          </div>
        ) : (
          <ArchiveList archives={archives} />
        )}
      </section>
    </main>
  );
}