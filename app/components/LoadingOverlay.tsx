"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {

  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return document.readyState !== "complete";
    }
    return true;
  });

  useEffect(() => {
    if (!visible) return;

    const onLoad = () => {
      setVisible(false);
    };

    window.addEventListener("load", onLoad);

    // Fallback: hide after 2 seconds
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeout);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <img
          src="/images/logo.png"
          alt="Lucky Travels Logo"
          className="w-40 h-auto mb-4"
        />
        <div className="w-12 h-12 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
