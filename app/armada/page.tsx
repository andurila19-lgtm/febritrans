import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import FleetCatalog from "@/components/FleetCatalog";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import { ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Daftar Armada & Tarif Sewa Mobil Motor Madiun | Febri Trans",
  description:
    "Katalog lengkap rental mobil dan motor di Kota Madiun. Avanza, Innova Reborn, Zenix Hybrid, Hiace Premio, Brio, Vario 160, BeAT. Tarif jujur dan transparan.",
};

export default function ArmadaPage() {
  const guarantees = [
    {
      icon: CheckCircle2,
      title: "Garansi Unit Bersih & Wangi",
      desc: "Setiap mobil dicuci bersih luar-dalam dan disemprot disinfektan higienis sebelum diserahkan kepada Anda.",
    },
    {
      icon: ShieldCheck,
      title: "Kondisi Mesin Selalu Prima",
      desc: "Servis berkala di bengkel resmi terjamin. Ban tebal, rem pakem, dan AC dingin siap melibas rute luar kota.",
    },
    {
      icon: Clock,
      title: "Jaminan Antar Tepat Waktu",
      desc: "Pengantaran unit ke stasiun kereta api, hotel, atau kantor di Madiun selalu tiba lebih awal dari jam janjian.",
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
              Katalog Lengkap &amp; Tarif Jujur
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Pilihan Armada <span className="text-brand-cyan">Febri Trans Madiun</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Seluruh kendaraan terawat dengan performa mesin tangguh dan interior bersih. Tersedia opsi sewa lepas kunci maupun dengan supir profesional.
            </p>
          </div>
        </section>

        {/* 3 Value Badges */}
        <section className="w-full py-8 bg-white border-b border-slate-200/80">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guarantees.map((g, idx) => {
                const IconComp = g.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">{g.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">{g.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full Fleet Catalog Component with Filter Tabs */}
        <FleetCatalog />

        {/* Banner CTA */}
        <ConsultationCtaSection />
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}
