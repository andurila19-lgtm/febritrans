"use client";

import Link from "next/link";
import { HERO_SHOWCASE_VEHICLES, getWhatsAppBookingUrl } from "@/data/fleet";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function Hero() {
  const featuredCars = [
    HERO_SHOWCASE_VEHICLES[0], // Avanza Facelift
    HERO_SHOWCASE_VEHICLES[2], // Innova Reborn
    HERO_SHOWCASE_VEHICLES[4], // Hiace Premio
  ];

  return (
    <>
      {/* ======================================================== */}
      {/* 1. MOBILE HERO VIEW (Exact match to Kadence mobile view) */}
      {/* ======================================================== */}
      <section className="lg:hidden w-full bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100">
        {/* Soft diagonal shape accent on the right */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-100/50 via-indigo-50/30 to-transparent pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 pt-8 pb-4 relative z-10">
          <div className="text-center space-y-4 max-w-md mx-auto">
            {/* Top Subtitle */}
            <p className="text-xs sm:text-sm text-[#718096] font-normal leading-normal">
              Kunjungan penting di Madiun, tapi urusan transport masih belum jelas?
            </p>

            {/* Main Headline */}
            <h1 className="font-heading text-lg sm:text-xl font-black text-[#1A202C] leading-snug uppercase tracking-tight">
              SPESIALIST PERJALANAN BISNIS &amp; DINAS <br />
              <span className="text-brand-blue">FEBRI TRANS MADIUN</span> SIAPKAN <br />
              ARMADA DAN SOPIR PROFESIONAL
            </h1>

            {/* Paragraph Subtext */}
            <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed font-normal">
              Sewa rental mobil untuk perjalanan bisnis, dinas dan keperluan pribadi lainnya. <br />
              Anda fokus pada bisnis, kunjungan dan liburan, kami siapkan transportasi profesional, aman dan nyaman.
            </p>

            {/* Solid Blue Action Button */}
            <div className="pt-2 pb-2">
              <a
                href={getWhatsAppBookingUrl("", "Konsultasikan Kebutuhan Mobil Anda")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0463bf] hover:bg-[#034e96] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>Konsultasikan Kebutuhan Mobil Anda</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clean Featured Vehicle Presentation (White Background below text) */}
        <div className="w-full bg-white pt-2 pb-6 px-4 flex items-center justify-center border-t border-slate-100">
          <div className="relative w-full max-w-[280px] flex items-center justify-center">
            <img
              src="https://senatransport.co.id/wp-content/uploads/2025/12/Screenshot-at-Dec-21-12-22-53-1-1.png"
              alt="Armada Febri Trans Madiun"
              className="w-full h-auto object-contain drop-shadow-md"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. DESKTOP HERO VIEW (Executive Dark Navy & Full Cards) */}
      {/* ======================================================== */}
      <section
        id="beranda"
        className="hidden lg:flex relative w-full min-h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-3.5rem)] flex-col justify-center overflow-hidden bg-brand-navy py-6 lg:py-6"
      >
        {/* Automotive Highway Background with Deep Navy Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero-bg.jpg"
            alt="Febri Trans Madiun Luxury Fleet"
            className="w-full h-full object-cover object-center opacity-30 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2547]/90 via-[#0F2547]/80 to-[#0F2547]/95" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 w-full flex flex-col justify-center h-full z-10">
          {/* Hero Text Content */}
          <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center space-y-3 mb-6">
            <p className="text-sm text-slate-300 font-normal">
              Kunjungan penting di Madiun, tapi urusan transport masih belum jelas?
            </p>

            <h1 className="font-heading text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-md">
              Spesialis Perjalanan Bisnis &amp; Dinas <br />
              <span className="text-brand-cyan">Febri Trans Madiun</span> Siapkan Armada &amp; Sopir Profesional
            </h1>

            <p className="text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
              Sewa mobil lepas kunci atau dengan sopir berpengalaman. Anda fokus pada agenda bisnis &amp; dinas, kami jamin perjalanan aman, tepat waktu, dan berkelas.
            </p>

            <div className="pt-1">
              <a
                href={getWhatsAppBookingUrl("", "Konsultasikan Kebutuhan Mobil Anda")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-navy text-sm font-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <svg
                  viewBox="0 0 448 512"
                  fill="#25D366"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                <span>Konsultasikan Kebutuhan Mobil Anda</span>
              </a>
            </div>
          </ScrollReveal>

          {/* 3 Featured Vehicles on Desktop */}
          <div className="w-full">
            <ScrollReveal direction="none" staggerChildren={0.1} className="grid grid-cols-3 gap-6">
              {featuredCars.map((car, idx) => (
                <ScrollRevealItem key={idx} direction="up">
                  <a
                    href={getWhatsAppBookingUrl(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 hover:bg-white/15 border border-white/15 hover:border-brand-cyan/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-full h-44 bg-gradient-to-b from-white/10 to-transparent p-4 flex items-center justify-center">
                      <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 drop-shadow-md"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-center border-t border-white/10 bg-slate-950/40">
                      <p className="font-heading font-extrabold text-base text-white tracking-tight group-hover:text-brand-cyan transition-colors">
                        {car.name}
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Mulai dari –{" "}
                        <span className="text-brand-cyan font-bold font-mono">
                          {car.startingPrice}
                        </span>
                      </p>
                    </div>
                  </a>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>

          {/* Quick Link to Full Catalog Page */}
          <div className="text-center pt-3">
            <Link
              href="/armada"
              className="text-[11px] font-semibold text-slate-300 hover:text-brand-cyan transition-colors inline-flex items-center gap-1"
            >
              <span>Lihat Semua 8+ Pilihan Unit Lengkap &amp; Tarif</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
