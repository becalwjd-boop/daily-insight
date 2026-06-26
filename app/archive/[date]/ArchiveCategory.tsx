"use client";

import { useState } from "react";
import { cleanTitle, formatNewsTime } from "@/lib/news";
import SmartThumbnail from "@/app/SmartThumbnail";

function ArchiveThumbnail({ article }: { article: any }) {
    return (
        <SmartThumbnail
            src={article.imageUrl}
            title={article.title}
            className="h-12 w-12 sm:h-14 sm:w-14"
        />
    );
}

export default function ArchiveCategory({
    category,
    articles,
}: {
    category: string;
    articles: any[];
}) {
    const [visibleCount, setVisibleCount] = useState(10);

    const visibleArticles = articles.slice(0, visibleCount);
    const hasMore = visibleCount < articles.length;

    return (
        <article
            id={`category-${category}`}
            className="scroll-mt-6 rounded-3xl bg-white p-6 shadow-sm"
        >
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">{category}</h2>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                    {articles.length} articles
                </span>
            </div>

            {articles.length === 0 ? (
                <p className="text-sm text-gray-400">저장된 기사가 없습니다.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {visibleArticles.map((article: any, index: number) => (
                            <li
                                key={`${category}-${article.url || index}`}
                                className="border-b border-gray-100 pb-4 last:border-0"
                            >
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex gap-3"
                                >
                                    <ArchiveThumbnail article={article} />

                                    <div className="min-w-0 flex-1">
                                        <p className="mb-1 text-xs text-gray-400">
                                            {formatNewsTime(article.pubDate)}
                                        </p>

                                        <p className="text-base font-medium leading-relaxed group-hover:text-blue-600">
                                            <span className="mr-2 font-bold text-blue-600">
                                                {String(index + 1).padStart(2, "0")}.
                                            </span>

                                            <span>{cleanTitle(article.title)}</span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {hasMore && (
                        <button
                            type="button"
                            onClick={() => setVisibleCount((count) => count + 10)}
                            className="mt-4 w-full rounded-2xl bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                        >
                            10개 더보기
                        </button>
                    )}
                </>
            )}
        </article>
    );
}