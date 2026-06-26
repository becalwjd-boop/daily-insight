"use client";

import { useEffect, useRef, useState } from "react";

export default function PullToRefresh() {
  const startY = useRef(0);
  const pulling = useRef(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("아래로 당겨 새로고침");

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const handleTouchStart = (event: TouchEvent) => {
      if (window.scrollY !== 0) return;

      startY.current = event.touches[0].clientY;
      pulling.current = true;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!pulling.current) return;

      const currentY = event.touches[0].clientY;
      const distance = currentY - startY.current;

      if (distance > 60 && window.scrollY === 0) {
        setVisible(true);
        setMessage("최신 뉴스를 확인하는 중...");
      }
    };

    const handleTouchEnd = () => {
      if (!pulling.current) return;

      pulling.current = false;

      if (visible) {
        setMessage("새로고침 중...");

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed left-1/2 top-4 z-[9999] -translate-x-1/2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg md:hidden">
      <span className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent align-[-2px]" />
      {message}
    </div>
  );
}