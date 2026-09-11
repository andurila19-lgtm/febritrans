import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FleetCatalog from "@/components/FleetCatalog";
import ServicesSolutionSection from "@/components/ServicesSolutionSection";
import HowToBook from "@/components/HowToBook";
import RentalTermsAndFaq from "@/components/RentalTermsAndFaq";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#0463bf] selection:text-white">
      <Navbar />

      <main>
        {/* 1. Hero — Simple headline + trust badge + 2 CTAs */}
        <Hero />

        {/* 2. Armada — Focal point: katalog kendaraan */}
        <FleetCatalog />

        {/* 3. Layanan — 3 tipe layanan sederhana */}
        <ServicesSolutionSection />

        {/* 4. Cara Booking — 4 langkah */}
        <HowToBook />

        {/* 5. FAQ */}
        <RentalTermsAndFaq />

        {/* 6. Ulasan Google */}
        <GoogleReviewsSection />

        {/* 7. CTA + Lokasi */}
        <FinalCta />
      </main>

      <Footer />

      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
}
