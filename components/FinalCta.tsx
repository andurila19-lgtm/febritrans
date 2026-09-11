import Link from "next/link";
import { DISPLAY_PHONE, LOCATION_ADDRESS, GOOGLE_MAPS_URL, getWhatsAppBookingUrl } from "@/data/fleet";
import { MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white border-b border-sky-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left CTA */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Siap Sewa Mobil atau Motor di Kota Madiun?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-[55ch]">
              Hubungi layanan pelanggan Febri Trans kapan saja. Dapatkan unit bersih, pelayanan ramah, tarif transparan, dan respon cepat 24 jam nonstop.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin reservasi rental mobil/motor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp ({DISPLAY_PHONE})</span>
              </a>

              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider border border-white/30 rounded transition-all whitespace-nowrap group"
              >
                <span>Info Kontak & Lokasi</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Details Card in Clean White */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-lg p-6 sm:p-7 space-y-4 shadow-xl shadow-black/10">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600">
                Pusat Layanan Garasi
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">Febri Trans Madiun</h3>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{LOCATION_ADDRESS}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-800 font-semibold">{DISPLAY_PHONE} (24 Jam Nonstop)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Buka Setiap Hari</span>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-sky-600 hover:text-sky-700 font-bold"
              >
                Buka Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
