import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import ContactCardsSection from "@/components/ContactCardsSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import { DISPLAY_PHONE, WHATSAPP_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS, GOOGLE_MAPS_URL, getWhatsAppBookingUrl } from "@/data/fleet";
import { MessageSquare, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak & Alamat Garasi Madiun 24 Jam | Febri Trans",
  description:
    "Hubungi CV Febri Trans Madiun 24 jam non-stop via WhatsApp atau telepon. Alamat garasi di Kelun, Kartoharjo, Kota Madiun. Siap antar-jemput stasiun.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
      <Navbar />

      <main>
        {/* Page Hero Header */}
        <section className="relative w-full py-16 lg:py-20 bg-gradient-to-b from-[#0F2547] to-[#0A1A33] text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-dot-pattern" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Hubungi Kami 24 Jam
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Kontak &amp; Lokasi Garasi <br />
              <span className="text-brand-cyan">Febri Trans Madiun</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
              Customer service kami standby 24 jam siap merespons pertanyaan jadwal, ketersediaan unit armada, dan penjemputan Stasiun Madiun.
            </p>
          </div>
        </section>

        {/* 4 Quick Info Contact Cards */}
        <ContactCardsSection />

        {/* Location & Map Embed Section */}
        <section className="w-full py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Action & Location Detail */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    Lokasi Garasi
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                    Kunjungi Garasi Kami di Kota Madiun
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Alamat Lengkap Garasi</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">{LOCATION_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Jam Layanan &amp; Antar-Jemput</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Buka 24 Jam Non-Stop. Melayani penjemputan dini hari atau larut malam dari Stasiun Kereta Api Madiun.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Respons Cepat via WhatsApp</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Konsultasi tarif transparan dan ketersediaan armada dilayani langsung oleh tim admin berpengalaman.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppBookingUrl("", "Tanya Ketersediaan Mobil")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat WhatsApp Sekarang</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Google Maps Embed */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[420px] sm:h-[480px] relative">
                  <iframe
                    title="Peta Lokasi Garasi Febri Trans Madiun"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5126046206197!2d111.5369688!3d-7.6278889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf8c8e622b79%3A0x6d9beebf59c11849!2sFebri%20Trans%20Madiun!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-md flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-slate-800 truncate">
                      📍 Garasi Kelun, Kartoharjo, Kota Madiun
                    </span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-bold text-brand-blue hover:underline"
                    >
                      Buka di Google Maps ↗
                    </a>
                  </div>
                </div>
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
