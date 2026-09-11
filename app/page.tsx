import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSolutionSection from "@/components/ServicesSolutionSection";
import HowToBook from "@/components/HowToBook";
import FleetCatalog from "@/components/FleetCatalog";
import RentalTermsAndFaq from "@/components/RentalTermsAndFaq";
import StatsCredibilitySection from "@/components/StatsCredibilitySection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import ContactCardsSection from "@/components/ContactCardsSection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
      {/* 1. Header & Glass Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Section (Gradient Navy Dark) */}
        <Hero />

        {/* 3. Problem Solution: Masalah Transportasi Anda Kami Selesaikan (White Light + Dot Pattern) */}
        <ProblemSolutionSection />

        {/* 4. Layanan: Solusi Transportasi Andal (Gradient Warm Light) */}
        <ServicesSolutionSection />

        {/* 5. 3 Langkah Mudah Pemesanan (Dark Navy Background) */}
        <HowToBook />

        {/* 6. Katalog Armada Lengkap (White Light Background) */}
        <FleetCatalog />

        {/* 7. FAQ & Syarat Ketentuan Sewa (Dark Slate Background) */}
        <RentalTermsAndFaq />

        {/* 8. Statistik 9.262+ & Institusi Terpercaya (Gradient Blue Background) */}
        <StatsCredibilitySection />

        {/* 9. Testimoni Google Maps Review (Warm Cream Background) */}
        <GoogleReviewsSection />

        {/* 10. Konsultasi Sekarang CTA Banner (Gradient Vibrant Cyan Background) */}
        <ConsultationCtaSection />

        {/* 11. 4 Info Kontak Cepat (Slate Light Background) */}
        <ContactCardsSection />
      </main>

      {/* 12. Footer 3 Kolom & Copyright (Gradient Dark Navy) */}
      <Footer />

      {/* 13. Floating WhatsApp Button with Ripple Pulse */}
      <FloatingWhatsapp />

      {/* 14. Smooth Back to Top Button */}
      <BackToTop />
    </div>
  );
}
