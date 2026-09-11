"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shadow-lg border border-slate-700 transition-all duration-200"
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
