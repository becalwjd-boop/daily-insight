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
            className={`relative shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}
        >
            {(!showImage || !loaded) && (
                <div className="absolute inset-0 animate-pulse rounded-xl">
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-1 h-4 w-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4-4 4 4 4-6 4 6"
                            />
                        </svg>

                        <span className="text-[8px] font-bold tracking-tight text-gray-400">
                            Daily
                        </span>
                    </div>
                </div>
            )}

            {showImage && (
                <img
                    src={src}
                    alt={cleanTitle(title)}
                    className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
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