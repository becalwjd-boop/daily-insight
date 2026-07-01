"use client";

import { useState } from "react";

export default function ShareCategoryButton({
    categoryName,
    items,
}: {
    categoryName: string;
    items: any[];
}) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        const today = new Date().toLocaleDateString("ko-KR");

        const text = [
            `★★ ${today} Daily Insight ${categoryName} 헤드라인 ★★`,
            "",
            ...items.map((item, index) => {
                const title = String(item.title || "")
                    .replace(/<[^>]*>/g, "")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&amp;/g, "&")
                    .trim();

                const link = item.originallink || item.link || item.url || "";

                return `${String(index + 1).padStart(2, "0")}. ${title}\n${link}`;
            }),

            "",
            "────────────",
            "실시간 뉴스 더 보기",
            "https://daily-insight-blush.vercel.app",
        ].join("\n\n");

        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1600);
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
        >
            {copied ? "복사 완료" : "헤드라인 복사"}
        </button>
    );
}