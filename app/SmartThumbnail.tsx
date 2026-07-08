"use client";

import { useEffect, useRef, useState } from "react";
import { cleanTitle } from "@/lib/news";

export default function SmartThumbnail({
  src,
  title,
  link,
  originallink,
  url,
  className = "",
}: {
  src?: string | null;
  title: string;
  link?: string | null;
  originallink?: string | null;
  url?: string | null;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [imageSrc, setImageSrc] = useState(src || null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (imageSrc) return;
    if (!link && !originallink && !url) return;

    const controller = new AbortController();
    const params = new URLSearchParams();

    if (link) params.set("link", link);
    if (originallink) params.set("originallink", originallink);
    if (url) params.set("url", url);

    fetch(`/api/thumbnail?${params.toString()}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.imageUrl) {
          setImageSrc(data.imageUrl);
          setFailed(false);
        }
      })
      .catch(() => {
        setFailed(true);
      });

    return () => controller.abort();
  }, [visible, imageSrc, link, originallink, url]);

  const showImage = imageSrc && !failed;

  return (
    <div
      ref={wrapperRef}
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
          src={imageSrc}
          alt={cleanTitle(title)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
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