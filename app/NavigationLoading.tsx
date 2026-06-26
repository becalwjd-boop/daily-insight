"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";

export default function NavigationLoading() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;
      if (link.target === "_blank") return;
      if (link.href.startsWith("mailto:")) return;
      if (link.href.startsWith("tel:")) return;

      const currentUrl = window.location.href;
      const nextUrl = link.href;

      if (currentUrl === nextUrl) return;

      setIsLoading(true);
    };

    const handlePopState = () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (!isLoading) return null;

  return <LoadingOverlay />;
}