import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedFleet from "@/components/FeaturedFleet";
import ServicesSolutionSection from "@/components/ServicesSolutionSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import HowToBook from "@/components/HowToBook";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Intro Singkat Febri Trans */}
        <section className="py-14 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Rental Mobil & Motor Terpercaya di Kota Madiun
                </h2>
              </div>
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Febri Trans melayani kebutuhan rental mobil dan sewa sepeda motor dengan komitmen unit bersih, prima, dan pelayanan ramah. Berbasis di Kelun, Kartoharjo, kami siap melayani pelanggan perorangan, keluarga, dinas, hingga rombongan selama 24 jam setiap hari.
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-slate-700 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Lepas Kunci & Driver
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Unit Rutin Diservis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    Harga Transparan
                  </span>
                  <Link
                    href="/tentang"
                    className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 hover:underline font-bold"
                  >
                    <span>Profil Lengkap</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Armada */}
        <FeaturedFleet />

        {/* 4. Layanan Rental */}
        <ServicesSolutionSection />

        {/* 5. Trust / Google Reviews */}
        <GoogleReviewsSection />

        {/* 6. Cara Booking */}
        <HowToBook />

        {/* 7. Final CTA & Kontak */}
        <FinalCta />
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
