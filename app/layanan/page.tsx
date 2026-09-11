import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import { getWhatsAppBookingUrl } from "@/data/fleet";
import { Briefcase, UserCheck, Key, Users, Bike, ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rental Mobil & Motor Madiun | CV Febri Trans",
  description:
    "Pilihan layanan sewa mobil dinas instansi, sopir protokoler VIP, rental lepas kunci harian, minibus Hiace wisata, dan sewa motor matik di Kota Madiun.",
};

export default function LayananPage() {
  const mainServices = [
    {
      icon: Briefcase,
      title: "Sewa Mobil Dinas & Kunjungan Kerja",
      tagline: "Solusi Resmi Perjalanan BUMN & Instansi Pemerintah",
      desc: "Layanan khusus untuk pejabat, ASN, dan profesional korporasi dengan unit mobil bersih, terawat, dan dukungan invoice resmi, kuitansi bermaterai untuk kemudahan SPJ dan LPJ anggaran dinas Anda.",
      features: [
        "Innova Reborn, Zenix Hybrid, dan Avanza terbaru",
        "Dokumen invoice, faktur, & kuitansi resmi berstempel",
        "Penjemputan tepat waktu di Stasiun Madiun atau hotel",
        "Fleksibilitas rute kunjungan instansi Madiun Raya & sekitarnya",
      ],
      ctaText: "Pesan Mobil Dinas",
      badge: "Favorit Instansi",
      badgeColor: "bg-blue-100 text-brand-blue",
    },
    {
      icon: UserCheck,
      title: "Sewa Mobil Plus Supir Protokoler VIP",
      tagline: "Kenyamanan Maksimal Tanpa Capek Menyetir",
      desc: "Didampingi driver profesional berpakaian rapi, ramah, tidak merokok dalam mobil, paham protokol kedinasan, dan hafal jalur alternatif Jawa Timur untuk menjamin agenda Anda selesai tepat waktu.",
      features: [
        "Driver beretika formal & memahami standar VIP",
        "Standby standby di lokasi lebih awal dari jadwal",
        "Tersedia paket All-In (Mobil + Sopir + BBM + Tol)",
        "Bebas syarat jaminan identitas rumit",
      ],
      ctaText: "Sewa Mobil + Sopir",
      badge: "Eksekutif VIP",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      icon: Key,
      title: "Rental Mobil Lepas Kunci (Self-Drive)",
      tagline: "Privasi Penuh untuk Agenda Pribadi & Keluarga",
      desc: "Bagi Anda yang menginginkan fleksibilitas dan privasi penuh saat berkeliling Kota Madiun, Magetan, Ponorogo, atau Ngawi bersama keluarga tercinta.",
      features: [
        "Pilihan transmisi Manual & Matik (AT)",
        "Unit wangi, AC dingin, dan suspensi nyaman",
        "Proses verifikasi identitas cepat dan transparan",
        "Bebas keliling tanpa batasan rute dalam area kesepakatan",
      ],
      ctaText: "Sewa Lepas Kunci",
      badge: "Fleksibel & Hemat",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: Users,
      title: "Sewa Hiace Minibus Rombongan & Wisata",
      tagline: "Kapasitas 10 - 15 Kursi untuk Rombongan Berkelas",
      desc: "Armada Hiace Premio Luxury dan Commuter siap mengantar rombongan keluarga besar, ziarah, kunjungan studi banding dinas, hingga wisata Sarangan dan Lawu dengan ruang kabin luas dan suspensi lembut.",
      features: [
        "Kapasitas luas hingga 14-15 penumpang",
        "Kabin senyap dengan AC ducting merata ke setiap baris",
        "Termasuk driver berpengalaman jalur pegunungan",
        "Bagasi lapang untuk oleh-oleh dan koper",
      ],
      ctaText: "Sewa Hiace Minibus",
      badge: "Rombongan Wisata",
      badgeColor: "bg-indigo-100 text-indigo-800",
    },
    {
      icon: Bike,
      title: "Rental Motor Matik Harian Madiun",
      tagline: "Praktis, Cepat, Bebas Macet di Pusat Kota",
      desc: "Sewa motor matik injeksi irit BBM untuk mobilitas cepat sales, survei lapangan, backpacker wisata, atau antar-jemput dari Stasiun Kereta Api Madiun.",
      features: [
        "Unit Honda Vario 160 dan BeAT CBS terawat",
        "Sudah termasuk 2 helm SNI bersih + jas hujan",
        "Pengantaran langsung ke lobi Stasiun Madiun",
        "Tarif harian hemat mulai Rp 70.000 / hari",
      ],
      ctaText: "Sewa Motor Matik",
      badge: "Hemat & Cepat",
      badgeColor: "bg-rose-100 text-rose-800",
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
              Layanan Unggulan
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Solusi Rental Mobil &amp; Motor <br />
              <span className="text-brand-cyan">Terlengkap di Kota Madiun</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Dari kebutuhan dinas instansi, tamu penting VIP, liburan keluarga dengan Hiace, hingga motor matik lincah di pusat kota.
            </p>
          </div>
        </section>

        {/* 5 Main Services Breakdown */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-12">
            {mainServices.map((srv, idx) => {
              const IconComp = srv.icon;
              const isEven = idx % 2 === 1;

              return (
                <ScrollReveal key={idx} direction="up">
                  <div
                    className={`p-6 sm:p-10 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/40 to-blue-50/20 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Info Column */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${srv.badgeColor}`}>
                          {srv.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                          {srv.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-brand-blue">
                          {srv.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>

                      {/* Feature Points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {srv.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Column */}
                    <div className="lg:col-span-4 flex flex-col justify-center items-stretch sm:items-start lg:items-center bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm text-center">
                      <p className="text-xs text-slate-500 mb-1">Siap Reservasi?</p>
                      <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-4">
                        Konsultasi Jadwal &amp; Tarif
                      </h4>
                      <a
                        href={getWhatsAppBookingUrl("", srv.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                      >
                        <span>{srv.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* All-In vs Lepas Kunci Comparison Table */}
        <section className="w-full py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Panduan Pilihan Paket
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
                Paket Lepas Kunci vs Paket All-In
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Pilih paket sewa yang paling cocok dengan preferensi anggaran dan kenyamanan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lepas Kunci Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-black text-xl text-slate-900">
                    Sewa Lepas Kunci
                  </h4>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    Self-Drive
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Cocok untuk Anda yang ingin privasi penuh bersama keluarga atau sudah terbiasa menyetir sendiri di Madiun.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2">✓ Bebas mengatur waktu &amp; rute sendiri</li>
                  <li className="flex items-center gap-2">✓ Tarif sewa harian lebih hemat</li>
                  <li className="flex items-center gap-2">✓ BBM &amp; e-toll diisi mandiri sesuai pemakaian</li>
                  <li className="flex items-center gap-2">✓ Menitipkan jaminan motor &amp; identitas resmi</li>
                </ul>
              </div>

              {/* All In Card */}
              <div className="bg-white border-2 border-brand-blue rounded-2xl p-7 shadow-md space-y-4 relative">
                <span className="absolute -top-3 right-6 bg-brand-blue text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Paling Praktis
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-black text-xl text-brand-blue">
                    Sewa Mobil + Supir (All-In)
                  </h4>
                </div>
                <p className="text-xs text-slate-500">
                  Pilihan utama dinas instansi, tamu VIP, dan wisatawan yang ingin istirahat total tanpa rasa lelah.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 text-emerald-700 font-semibold">✓ Tidak perlu jaminan motor rumit</li>
                  <li className="flex items-center gap-2">✓ Supir berpengalaman, sopan, &amp; tepat waktu</li>
                  <li className="flex items-center gap-2">✓ Pilihan paket komplit Mobil + Supir + BBM + Tol</li>
                  <li className="flex items-center gap-2">✓ Didukung invoice resmi untuk SPJ dinas</li>
                </ul>
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
