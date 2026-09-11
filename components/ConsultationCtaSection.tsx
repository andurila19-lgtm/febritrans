import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";
import ScrollReveal from "@/components/ScrollReveal";

export default function ConsultationCtaSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gradient-to-br from-brand-navy via-brand-blue to-sky-600 text-white relative overflow-hidden shadow-2xl">
      {/* Decorative luminous blobs and dot pattern */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center relative z-10">
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              ⚡ Konsultasi Gratis &amp; Cepat
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Kebutuhan Bisnis, Dinas, Atau <br className="hidden sm:inline" />
              <span className="text-brand-cyan">Liburan Keluarga?</span>
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
              Kirimkan rencana perjalanan Anda ke WhatsApp kami. Tim kami segera siapkan armada terawat dan driver terbaik yang siap menjemput Anda.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppBookingUrl("", "Cek Mobil Tersedia")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-navy hover:bg-slate-50 text-sm sm:text-base font-extrabold uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600 transition-transform" />
                <span>Cek Mobil Tersedia</span>
                <ArrowRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
