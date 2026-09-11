import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import StatsCredibilitySection from "@/components/StatsCredibilitySection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, FileText, CheckCircle2, Award, Building2, MapPin } from "lucide-react";
import { LOCATION_ADDRESS, GOOGLE_MAPS_URL } from "@/data/fleet";

export const metadata: Metadata = {
  title: "Tentang Kami & Legalitas Resmi | CV Febri Trans Madiun",
  description:
    "Profil CV Febri Trans Madiun, penyedia jasa transportasi rental mobil dan motor terpercaya. Dokumen legalitas resmi, kuitansi bermaterai, dan garasi di Kartoharjo Madiun.",
};

export default function TentangKamiPage() {
  const values = [
    {
      title: "Legalitas & Akuntabilitas Resmi",
      desc: "Badan usaha resmi berbentuk CV dengan kelengkapan perizinan berusaha, NPWP, dan kemampuan menerbitkan invoice, faktur, serta kuitansi bermaterai sah untuk kebutuhan SPJ kantor.",
    },
    {
      title: "Armada Terawat & Bersih",
      desc: "Setiap mobil melewati inspeksi rutin berkala di bengkel resmi serta pembersihan interior mendalam demi menjaga kenyamanan penumpang VIP.",
    },
    {
      title: "Driver Terlatih & Beretika",
      desc: "Driver kami dipilih melalui seleksi ketat. Mengutamakan keselamatan berkendara (safety driving), santun, rapi, dan menjaga kerahasiaan agenda penumpang.",
    },
    {
      title: "Transparansi Tarif Tanpa Biaya Tersembunyi",
      desc: "Tarif sewa disampaikan secara terbuka sejak awal pemesanan tanpa ada markup liar di tengah perjalanan.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
      <Navbar />

      <main>
        {/* Page Hero Header */}
        <section className="relative w-full py-16 lg:py-20 bg-gradient-to-b from-[#0F2547] to-[#0A1A33] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-dot-pattern" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Profil Perusahaan
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Mengenal Lebih Dekat <br />
              <span className="text-brand-cyan">CV Febri Trans Madiun</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Mitra transportasi terpercaya bagi instansi pemerintahan, korporasi swasta, tamu dinas, dan masyarakat Madiun Raya selama lebih dari 10 tahun.
            </p>
          </div>
        </section>

        {/* Company Profile Narrative */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    Dedikasi &amp; Komitmen
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Solusi Transportasi Profesional yang Menjawab Kebutuhan Anda
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <p>
                    <strong>CV FEBRI TRANS MADIUN</strong> lahir dari pemahaman mendalam atas kebutuhan mobilitas di Kota Madiun dan sekitarnya. Perjalanan kedinasan, kunjungan industri, maupun perjalanan pribadi sering kali terkendala armada yang tidak siap, driver yang tidak memahami etika protokoler, atau administrasi sewa yang berbelit-belit.
                  </p>
                  <p>
                    Kami hadir membawa standar baru dalam industri rental kendaraan: mengedepankan <strong>ketepatan waktu penjemputan</strong>, <strong>kebersihan unit prima</strong>, serta <strong>keabsahan legalitas formal</strong> yang mempermudah pertanggungjawaban anggaran instansi Anda.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Garasi Resmi di Kota Madiun</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Berlokasi di Kel. Kelun, Kartoharjo siap antar cepat ke stasiun &amp; hotel.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                    <FileText className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Kelengkapan SPJ Dinas</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Invoice berstempel, NPWP, kuitansi bermaterai untuk LPJ instansi Anda.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Garasi Kelun Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-[#0F2547] to-[#0A1A33] text-white rounded-3xl p-8 shadow-2xl border border-white/15 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-black text-xl">
                      FT
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-lg text-white">
                        CV FEBRI TRANS MADIUN
                      </h3>
                      <p className="text-xs text-slate-300">Badan Usaha Jasa Transportasi</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{LOCATION_ADDRESS}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Terdaftar &amp; Memiliki Izin Operasional Sah</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Rating 4.9/5.0 Google Maps Terverifikasi</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white text-brand-navy hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all"
                    >
                      <MapPin className="w-4 h-4 text-rose-600" />
                      <span>Petunjuk Arah Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Values */}
        <section className="w-full py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Nilai &amp; Standar Kerja
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
                4 Pilar Pelayanan Utama Kami
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs font-mono">
                      0{idx + 1}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-slate-900">
                      {v.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Stats & Partners */}
        <StatsCredibilitySection />

        {/* Google Reviews */}
        <GoogleReviewsSection />

        {/* Banner CTA */}
        <ConsultationCtaSection />
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}
