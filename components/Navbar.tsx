"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#armada", label: "Armada & Harga" },
    { href: "#layanan", label: "Layanan" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#0463bf] flex items-center justify-center">
            <span className="font-heading font-extrabold text-base text-white">
              FT
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-extrabold text-base tracking-tight text-slate-900">
              FEBRI TRANS
            </span>
            <span className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
              Rental Mobil & Motor Madiun
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-[#0463bf] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xs tracking-wider px-5 py-2.5 rounded-lg bg-[#0463bf] hover:bg-[#034e96] text-white transition-colors ml-2"
          >
            HUBUNGI KAMI
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0463bf] hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 mt-2 text-white bg-[#0463bf] hover:bg-[#034e96] rounded-lg font-bold text-center text-sm transition-colors"
          >
            HUBUNGI KAMI (WHATSAPP)
          </a>
        </div>
      )}
    </header>
  );
}
