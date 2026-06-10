"use client";

import { useEffect } from "react";

export default function AutoRefresh() {
  useEffect(() => {
    const timer = setInterval(() => {
      window.location.reload();
    }, 300000);

    return () => clearInterval(timer);
  }, []);

  return null;
}
