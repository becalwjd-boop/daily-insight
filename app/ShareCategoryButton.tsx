"use client";

import { useState } from "react";

type NewsGroup = {
    categoryName: string;
    items: any[];
};

export default function ShareCategoryButton({
    categoryName,
    items,
    groups,
    buttonText = "헤드라인 복사",
    variant = "default",
}: {
    categoryName?: string;
    items?: any[];
    groups?: NewsGroup[];
    buttonText?: string;
    variant?: "default" | "primary";
}) {
    const [copied, setCopied] = useState(false);

    function cleanText(text: string) {
        return String(text || "")
            .replace(/<[^>]*>/g, "")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, "&")
            .trim();
    }

    function formatItems(list: any[]) {
        return list
            .slice(0, 20)
            .map((item, index) => {
                const title = cleanText(item.title);
                const link = item.originallink || item.link || item.url || "";

                return `${String(index + 1).padStart(2, "0")}. ${title}\n${link}`;
            })
            .join("\n\n");
    }

    async function handleCopy() {
        const today = new Date().toLocaleDateString("ko-KR");

        const serviceGuide = [
            "━━━━━━━━━━━━━━━━━━━━━━",
            "",
            "📰 Daily Insight News",
            "",
            "📱 Android 앱 다운로드",
            "https://play.google.com/store/apps/details?id=com.dailyinsight.news",
            "",
            "🍎 iPhone(iOS) 사용자는 아래 웹앱(PWA)을",
            "홈 화면에 추가하여 동일하게 이용할 수 있습니다.",
            "https://daily-insight-blush.vercel.app",
            "",
            "━━━━━━━━━━━━━━━━━━━━━━",
        ].join("\n");

        const text = groups
            ? [
                `★★ ${today} Daily Insight 전체 주요 헤드라인 ★★`,
                "",
                ...groups.map((group) =>
                    [
                        "━━━━━━━━━━━━━━",
                        `■ ${group.categoryName}`,
                        "━━━━━━━━━━━━━━",
                        "",
                        formatItems(group.items),
                    ].join("\n")
                ),
                "",
                serviceGuide,
            ].join("\n\n")
            : [
                `★★ ${today} Daily Insight ${categoryName} 헤드라인 ★★`,
                "",
                formatItems(items || []),
                "",
                serviceGuide,
            ].join("\n\n");

        await navigator.clipboard.writeText(text);

        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={
                variant === "primary"
                    ? "rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-blue-50 hover:text-blue-600"
                    : "whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-1 text-[11px] sm:px-3 sm:text-sm font-semibold text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
            }
        >
            {copied ? "복사 완료" : buttonText}
        </button>
    );
}