import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import {
  DISPLAY_PHONE,
  LOCATION_ADDRESS,
  GOOGLE_MAPS_URL,
  OPERATING_HOURS,
  getWhatsAppBookingUrl,
} from "@/data/fleet";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Febri Trans — Rental Mobil & Motor Madiun",
  description:
    "Mengenal Febri Trans Madiun. Jasa rental mobil dan motor di Kelun, Kartoharjo, Kota Madiun. Layanan 24 jam dengan rating 4,8 dari 297+ ulasan di Google Maps.",
};

export default function TentangPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Profil Usaha"
          title="Tentang Febri Trans Madiun"
          description="Penyedia layanan rental kendaraan roda empat dan roda dua yang mengutamakan kebersihan armada, kepastian unit, dan kemudahan proses pemesanan."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Tentang" },
          ]}
        />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Story & Positioning */}
            <div className="bg-white border border-brand-border p-8 md:p-12">
              <div className="max-w-3xl space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
                  Melayani Kebutuhan Mobilitas di Kota Madiun
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                  <strong>Febri Trans</strong> adalah usaha jasa rental mobil dan motor yang berbasis di Kelun, Kecamatan Kartoharjo, Kota Madiun, Jawa Timur. Kami hadir untuk menjawab kebutuhan transportasi masyarakat lokal, profesional kedinasan, pelancong wisata, hingga mahasiswa yang membutuhkan kendaraan handal dengan prosedur yang transparan.
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Kami meyakini bahwa perjalanan yang menyenangkan berawal dari kendaraan yang berada dalam kondisi prima. Oleh karena itu, setiap armada kami diperiksa kelayakan mekanisnya dan dibersihkan secara menyeluruh sebelum diserahterimakan kepada pelanggan.
                </p>
              </div>

              {/* Verified Metrics / Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-brand-border">
                <div className="p-5 bg-brand-surface border border-brand-border">
                  <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-2xl font-extrabold text-brand-dark">4,8 / 5.0</div>
                  <p className="text-xs text-brand-muted mt-1">
                    Dari 297+ ulasan terverifikasi pelanggan di Google Maps.
                  </p>
                </div>

                <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                    <Clock className="w-5 h-5 text-sky-600" />
                    <span className="text-2xl font-extrabold text-sky-700">24 Jam</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">Operasional Nonstop</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Siap melayani reservasi dan serah terima kendaraan setiap hari.
                  </p>
                </div>

                <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-2xl font-extrabold text-amber-800">Kelun</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">Kartoharjo, Madiun</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Lokasi garasi strategis dan mudah dijangkau dari berbagai titik kota.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values / Service Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-3 shadow-xs">
                <div className="w-10 h-10 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Kebersihan & Kesiapan Armada
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami mengutamakan kabin yang wangi, jok bersih, sistem pendingin udara (AC) yang dingin, serta performa mesin yang rutin diservis berkala agar perjalanan Anda tenang tanpa kendala teknis.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-3 shadow-xs">
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Kejelasan & Transparansi Biaya
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tidak ada biaya siluman. Seluruh tarif sewa, ketentuan overtime, maupun opsi pengantaran diinformasikan secara jelas dan terbuka sejak awal komunikasi melalui WhatsApp.
                </p>
              </div>
            </div>

            {/* Office Location & Contact Card */}
            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-8 md:p-10 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Lokasi Garasi Febri Trans Madiun
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-2xl">
                  {LOCATION_ADDRESS}. Kami siap melayani serah terima langsung di garasi atau pengantaran menuju Stasiun Madiun, terminal, hotel, maupun kantor Anda.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs text-sky-100">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-300" />
                    {OPERATING_HOURS}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-300" />
                    {DISPLAY_PHONE}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-all whitespace-nowrap"
                >
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
