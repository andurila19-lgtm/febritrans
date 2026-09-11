"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, DISPLAY_PHONE, getWhatsAppBookingUrl } from "@/data/fleet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/armada", label: "Armada" },
    { href: "/harga", label: "Harga" },
    { href: "/layanan", label: "Layanan" },
    { href: "/syarat-sewa", label: "Syarat Sewa" },
    { href: "/faq", label: "FAQ" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border">
      {/* Top micro-bar for quick contact */}
      <div className="hidden md:block bg-brand-dark text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 text-stone-300">
            <span>Kota Madiun & Sekitarnya</span>
            <span>•</span>
            <span className="text-amber-400 font-medium">Buka 24 Jam Setiap Hari</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/-/g, "")}`}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-500" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Respon Cepat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-blue-700 rounded flex items-center justify-center text-white shadow-sm">
            <span className="font-heading font-black text-base tracking-wider text-white">
              FT
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
              FEBRI TRANS
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-sky-700">
              Rental Mobil & Motor Madiun
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 transition-colors relative ${
                  active
                    ? "text-sky-600 font-bold"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-sky-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Booking WA</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-800 hover:bg-slate-100 rounded transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
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
        <div className="xl:hidden bg-white border-b border-brand-border px-4 py-6 space-y-2 shadow-card animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium transition-colors rounded ${
                    active
                      ? "bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-brand-border space-y-2">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Booking via WhatsApp ({DISPLAY_PHONE})</span>
            </a>
            <p className="text-[11px] text-center text-slate-500">
              Buka 24 Jam • Lokasi Kelun, Kartoharjo, Madiun
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
