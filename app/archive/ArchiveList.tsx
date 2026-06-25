"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ArchiveItem = {
  date: string;
  count: number;
};

export default function ArchiveList({
  archives,
}: {
  archives: ArchiveItem[];
}) {
  const years = useMemo(() => {
    return Array.from(
      new Set(archives.map((item) => item.date.slice(0, 4)))
    ).sort((a, b) => Number(b) - Number(a));
  }, [archives]);

  const [selectedYear, setSelectedYear] = useState(years[0] || "");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [search, setSearch] = useState("");

  const months = useMemo(() => {
    return Array.from(
      new Set(
        archives
          .filter((item) => item.date.startsWith(selectedYear))
          .map((item) => item.date.slice(5, 7))
      )
    ).sort((a, b) => Number(b) - Number(a));
  }, [archives, selectedYear]);

  const filteredArchives = useMemo(() => {
    return archives.filter((item) => {
      const matchesYear = selectedYear
        ? item.date.startsWith(selectedYear)
        : true;

      const matchesMonth =
        selectedMonth === "all"
          ? true
          : item.date.slice(5, 7) === selectedMonth;

      const matchesSearch = search.trim()
        ? item.date.includes(search.trim())
        : true;

      return matchesYear && matchesMonth && matchesSearch;
    });
  }, [archives, selectedYear, selectedMonth, search]);

  return (
    <>
      <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">
        <label className="mb-2 block text-sm font-semibold text-gray-600">
          날짜 검색
        </label>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="예: 2026, 2026-06, 2026-06-25"
          className="mb-5 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
        />

        <div className="mb-5">
          <p className="mb-2 text-sm font-semibold text-gray-600">연도</p>

          <select
            value={selectedYear}
            onChange={(event) => {
              setSelectedYear(event.target.value);
              setSelectedMonth("all");
            }}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-blue-400"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-gray-600">월</p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedMonth("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedMonth === "all"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              전체
            </button>

            {months.map((month) => (
              <button
                key={month}
                type="button"
                onClick={() => setSelectedMonth(month)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedMonth === month
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {Number(month)}월
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredArchives.length === 0 ? (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          조건에 맞는 아카이브가 없습니다.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredArchives.map((item) => (
            <Link
              key={item.date}
              href={`/archive/${item.date}`}
              className="block rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{item.date}</h2>
                <span>{item.count}개 기사</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}