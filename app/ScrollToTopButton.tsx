"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
      className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
    >
      ↑
    </button>
  );
}