"use client";

import { useState } from "react";
import { cleanTitle } from "@/lib/news";

export default function SmartThumbnail({
    src,
    title,
    className = "",
}: {
    src?: string | null;
    title: string;
    className?: string;
}) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    const showImage = src && !failed;

    return (
        <div
            className={`relative shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-slate-50 to-white ${className}`}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                    src="/default-thumbnail.png"
                    alt="Daily Insight"
                    className="mb-1 h-8 w-8 object-contain"
                />

                <span className="mt-1 text-[7px] font-medium text-gray-500">
                    이미지 로딩중
                </span>
            </div>

            {showImage && (
                <img
                    src={src}
                    alt={cleanTitle(title)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onLoad={() => setLoaded(true)}
                    onError={() => {
                        setFailed(true);
                        setLoaded(false);
                    }}
                />
            )}
        </div>
    );
}