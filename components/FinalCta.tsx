import { MessageSquare, PhoneCall, CheckCircle2 } from "lucide-react";
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from "@/data/fleet";

export default function FinalCta() {
  return (
    <section className="w-full bg-[#121314] text-[#FAF9F6] py-16 lg:py-24 border-b border-[#2A2B2E]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-[#FFDEA3]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Customer Concierge 24 Jam Non-Stop</span>
            </div>

            <h2 className="font-newsreader text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05]">
              Siap Berangkat? <br />
              <span className="italic text-[#FFDEA3]">
                Booking Unit Terbaik Anda Sekarang.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#C5C6C9] max-w-xl font-normal leading-relaxed">
              Hubungi Febri Trans untuk cek kendaraan dan ketersediaan. Proses cepat,
              ramah, dan transparan untuk perjalanan dinas, bisnis, maupun liburan Anda di Kota Madiun.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#E3E2E0]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFDEA3]" />
                <span>Tanpa Biaya Terselubung</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFDEA3]" />
                <span>Unit Higienis &amp; Terawat</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFDEA3]" />
                <span>Siap Antar Stasiun Madiun</span>
              </span>
            </div>
          </div>

          {/* Right CTA Button & Info */}
          <div className="lg:col-span-4 flex flex-col gap-4 items-start lg:items-end">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Halo Febri Trans, saya siap berangkat dan ingin booking kendaraan di Madiun sekarang."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#121314] text-xs font-bold uppercase tracking-widest hover:bg-[#FFDEA3] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C89D42]" />
              <span>Booking via WhatsApp</span>
            </a>

            <div className="text-xs text-[#A8A59E] lg:text-right space-y-0.5">
              <span className="block font-semibold text-[#E3E2E0]">
                Hotline Call / WA: {DISPLAY_PHONE}
              </span>
              <span className="block text-[11px]">
                Garasi: Kelun, Kartoharjo, Kota Madiun
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
