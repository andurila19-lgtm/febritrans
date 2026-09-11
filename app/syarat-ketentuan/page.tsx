import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import HowToBook from "@/components/HowToBook";
import RentalTermsAndFaq from "@/components/RentalTermsAndFaq";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import { CheckCircle2, AlertCircle, FileCheck, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Rental Mobil Motor Madiun | FAQ Febri Trans",
  description:
    "Panduan lengkap syarat sewa mobil lepas kunci, persyaratan tamu dinas luar kota via Stasiun Madiun, hitungan waktu sewa, dan FAQ resmi Febri Trans.",
};

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
      <Navbar />

      <main>
        {/* Page Hero Header */}
        <section className="relative w-full py-16 lg:py-20 bg-gradient-to-b from-[#0F2547] to-[#0A1A33] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-dot-pattern" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Panduan Resmi &amp; FAQ
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Syarat, Ketentuan, &amp; <br />
              <span className="text-brand-cyan">FAQ Sewa Kendaraan</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Informasi transparan mengenai prosedur reservasi, jaminan sewa lepas kunci, aturan pengembalian unit, dan jawaban pertanyaan umum.
            </p>
          </div>
        </section>

        {/* 3 Langkah Mudah Pemesanan */}
        <HowToBook />

        {/* Persyaratan & FAQ Lengkap (Dark Slate Accordion) */}
        <RentalTermsAndFaq />

        {/* Ringkasan Tips Singkat Sewa */}
        <section className="w-full py-16 lg:py-20 bg-white border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Tips Sewa Nyaman
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
                Hal yang Perlu Diperhatikan
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-bold text-base text-slate-900">Booking Lebih Awal</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Khusus musim liburan, akhir pekan, atau agenda dinas penting, kami sarankan reservasi unit H-3 agar mobil pilihan Anda terkonfirmasi aman.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-bold text-base text-slate-900">Cek Bersama Saat Serah Terima</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Petugas kami akan mengajak Anda memeriksa kondisi fisik mobil, indikator bensin, dan dokumen kendaraan sebelum serah terima kunci.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-bold text-base text-slate-900">Komunikasi Tetap Terhubung</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Jika ada perubahan agenda atau perpanjangan waktu sewa, cukup hubungi customer service kami via WhatsApp untuk penyesuaian cepat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <ConsultationCtaSection />
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}
