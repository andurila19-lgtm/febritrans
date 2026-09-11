"use client";

import Link from "next/link";
import { FLEET_DATA, getWhatsAppBookingUrl } from "@/data/fleet";

export default function Hero() {
  const featuredCars = FLEET_DATA.filter((v) => v.category === "mobil").slice(0, 3);

  return (
    <>
      {/* ======== MOBILE HERO ======== */}
      <section className="lg:hidden w-full bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-5 pt-10 pb-6">
          <div className="text-center space-y-4 max-w-md mx-auto">
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1A202C] leading-tight tracking-tight">
              Rental Mobil & Motor Madiun
            </h1>

            <p className="text-sm text-[#4A5568] leading-relaxed">
              Pilihan kendaraan untuk kebutuhan perjalanan Anda di Madiun dan sekitarnya.
            </p>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#4A5568]">
              <span className="text-amber-500">★</span>
              <span className="font-semibold text-[#1A202C]">4,8/5</span>
              <span className="text-slate-300">·</span>
              <span>297+ Ulasan Google</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="#armada"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0463bf] hover:bg-[#034e96] text-white text-sm font-bold py-3.5 px-6 rounded-lg transition-colors"
              >
                Lihat Armada
              </Link>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-[#0463bf] text-[#1A202C] text-sm font-bold py-3.5 px-6 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 448 512" fill="#25D366" className="w-4 h-4 shrink-0" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Booking WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Featured vehicle image */}
        <div className="w-full bg-white pt-2 pb-6 px-4 flex items-center justify-center border-t border-slate-100">
          <div className="relative w-full max-w-[320px]">
            <img
              src="/images/fleet/avanza.jpg"
              alt="Armada Febri Trans Madiun"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ======== DESKTOP HERO ======== */}
      <section
        id="beranda"
        className="hidden lg:flex relative w-full min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden bg-[#0F2547] py-12"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2547] via-[#0F2547]/95 to-[#0F2547]" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 w-full z-10">
          {/* Hero Text */}
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-10">
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Rental Mobil & Motor{" "}
              <span className="text-[#01abe8]">Madiun</span>
            </h1>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Pilihan kendaraan untuk kebutuhan perjalanan Anda di Madiun dan sekitarnya.
            </p>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-3 text-sm text-slate-300">
              <span className="text-amber-400">★</span>
              <span className="font-semibold text-white">4,8/5</span>
              <span className="text-slate-500">·</span>
              <span>297+ Ulasan Google</span>
              <span className="text-slate-500">·</span>
              <span>Buka 24 Jam</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <Link
                href="#armada"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0F2547] text-sm font-bold px-7 py-3.5 rounded-lg shadow-lg transition-colors"
              >
                Lihat Armada
              </Link>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0463bf] hover:bg-[#034e96] text-white text-sm font-bold px-7 py-3.5 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Booking WhatsApp
              </a>
            </div>
          </div>

          {/* 3 Featured Vehicles */}
          <div className="grid grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <a
                key={car.id}
                href={getWhatsAppBookingUrl(car.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#01abe8]/40 rounded-lg overflow-hidden transition-all duration-200"
              >
                <div className="w-full h-44 bg-white/5 p-4 flex items-center justify-center">
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center border-t border-white/10">
                  <p className="font-heading font-bold text-base text-white group-hover:text-[#01abe8] transition-colors">
                    {car.name}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Mulai{" "}
                    <span className="text-[#01abe8] font-semibold">
                      {car.startingPrice}
                    </span>
                    /hari
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Link to full catalog */}
          <div className="text-center pt-5">
            <Link
              href="#armada"
              className="text-xs font-semibold text-slate-400 hover:text-[#01abe8] transition-colors inline-flex items-center gap-1"
            >
              <span>Lihat semua armada & harga</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
