import { Mail, Phone, Clock, MapPin, MessageSquare } from "lucide-react";
import { DISPLAY_PHONE, WHATSAPP_NUMBER, EMAIL_ADDRESS, LOCATION_ADDRESS, GOOGLE_MAPS_URL } from "@/data/fleet";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function ContactCardsSection() {
  return (
    <section className="w-full py-14 bg-slate-100/90 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" staggerChildren={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Email */}
            <ScrollRevealItem>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Email Resmi
                  </span>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="font-heading font-bold text-sm text-slate-800 hover:text-brand-blue transition-colors truncate block"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </ScrollRevealItem>

            {/* Card 2: No HP / WA */}
            <ScrollRevealItem>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex items-center gap-4 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp &amp; Telepon
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {DISPLAY_PHONE}
                  </span>
                </div>
              </a>
            </ScrollRevealItem>

            {/* Card 3: Operasional */}
            <ScrollRevealItem>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Jam Operasional
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-800">
                    Buka 24 Jam Non-Stop
                  </span>
                </div>
              </div>
            </ScrollRevealItem>

            {/* Card 4: Lokasi */}
            <ScrollRevealItem>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-rose-500/50 transition-all flex items-center gap-4 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Lokasi Garasi
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-800 group-hover:text-rose-600 transition-colors">
                    Kota Madiun (Kelun)
                  </span>
                </div>
              </a>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
