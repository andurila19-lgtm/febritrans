import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, ShieldCheck, Clock, MapPin } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-20 bg-gradient-to-b from-sky-50/70 via-white to-amber-50/20 text-brand-dark border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 4 Text Elements max */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* 1. Eyebrow - Bright & Cheerful */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100/80 border border-amber-300/80 rounded-full text-xs text-amber-950 shadow-xs">
              <span className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </span>
              <span className="font-extrabold text-amber-950">4,8 / 5.0</span>
              <span className="text-amber-800">· 297+ Ulasan Pelanggan Puas</span>
            </div>

            {/* 2. Headline (Max 2 lines, tight leading, high contrast) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Rental Mobil & Motor di <span className="text-sky-600 underline decoration-amber-400 decoration-wavy decoration-2">Kota Madiun</span>.
            </h1>

            {/* 3. Subtext (Clear value prop, warm & friendly tone) */}
            <p className="text-slate-600 text-base sm:text-lg max-w-[50ch] leading-relaxed">
              Unit bersih, harum, dan siap lepas kunci atau dengan sopir ramah. Buka 24 jam nonstop dengan tarif terjangkau mulai Rp 75.000.
            </p>

            {/* 4. CTAs (Cheerful WhatsApp green + high contrast Armada, no scale effect) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin booking rental kendaraan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md shadow-emerald-600/20 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Booking WhatsApp (24 Jam)</span>
              </a>

              <Link
                href="/armada"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-colors whitespace-nowrap"
              >
                <span>Lihat Armada</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Real Photography Showcase in Bright Clean Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 shadow-xl shadow-sky-950/5 p-4 sm:p-5 rounded-lg relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border border-slate-200 rounded">
                <Image
                  src="/images/fleet/innova.jpg"
                  alt="Toyota Innova Febri Trans Madiun"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                  Favorit Keluarga
                </div>
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-bold px-2 py-1 rounded border border-slate-200">
                  Lepas Kunci / Sopir
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Toyota Innova</h3>
                  <p className="text-xs text-slate-500">Medium MPV • 7 Penumpang • AC Dobel Blower</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-medium">Tarif Mulai</span>
                  <span className="text-sky-600 font-extrabold text-base sm:text-lg">Rp 500.000 <span className="text-xs text-slate-500 font-normal">/ hari</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Trust Strip Below Hero - Bright, Cheerful Badges */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
          <div className="bg-emerald-50/90 border border-emerald-200/70 rounded p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="block text-emerald-950 font-bold">Unit Bersih & Prima</span>
              <span className="text-emerald-700 text-[11px] font-normal">Servis berkala & wangi</span>
            </div>
          </div>

          <div className="bg-sky-50/90 border border-sky-200/70 rounded p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-sky-100 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-sky-600" />
            </div>
            <div>
              <span className="block text-sky-950 font-bold">Buka 24 Jam Nonstop</span>
              <span className="text-sky-700 text-[11px] font-normal">Respon WA cepat setiap hari</span>
            </div>
          </div>

          <div className="bg-amber-50/90 border border-amber-200/70 rounded p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <span className="block text-amber-950 font-bold">Garasi Kelun, Madiun</span>
              <span className="text-amber-700 text-[11px] font-normal">Antar jemput stasiun & kota</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
