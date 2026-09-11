"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "BERANDA" },
    { href: "/layanan", label: "LAYANAN" },
    { href: "/armada", label: "ARMADA & TARIF" },
    { href: "/tentang-kami", label: "TENTANG KAMI" },
    { href: "/syarat-ketentuan", label: "SYARAT & FAQ" },
    { href: "/kontak", label: "KONTAK" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200/80 shadow-sm">
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo - Compact & Professional */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-brand-blue/30 bg-white flex items-center justify-center shadow-sm transition-transform duration-200">
            <span className="font-heading font-black text-base sm:text-lg tracking-tighter text-brand-blue">
              FT
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors">
              FEBRI TRANS
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500 mt-0.5">
              Rental Mobil &amp; Motor Madiun
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Multi-Page Routes */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[12.5px] font-extrabold tracking-wider">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase transition-all duration-200 py-1 relative ${
                  active
                    ? "text-brand-blue font-black border-b-2 border-brand-blue"
                    : "text-slate-700 hover:text-brand-blue hover:border-b-2 hover:border-brand-blue/30"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase font-extrabold text-[11px] tracking-wider px-4 py-2 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white shadow-sm hover:shadow transition-all duration-200 ml-2"
          >
            HUBUNGI KAMI
          </a>
        </nav>

        {/* Mobile / Tablet Hamburger - Blue Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-blue hover:bg-blue-50 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-brand-blue" />
          ) : (
            <Menu className="w-6 h-6 text-brand-blue" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-2 shadow-xl animate-slide-up">
          <div className="flex flex-col space-y-1 font-bold text-sm text-slate-800">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg transition-colors ${
                    active
                      ? "text-brand-blue bg-blue-50 font-black"
                      : "hover:text-brand-blue hover:bg-slate-50 text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 mt-2 text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg font-extrabold text-center text-xs tracking-wider uppercase shadow-sm"
            >
              HUBUNGI KAMI (WHATSAPP)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
