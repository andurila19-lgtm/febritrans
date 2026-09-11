import { REAL_PARTNER_LOGOS } from "@/data/fleet";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function StatsCredibilitySection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-900 via-brand-blue to-sky-700 text-white relative overflow-hidden shadow-inner">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Numbers Row */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-14 border-b border-white/20">
            <div className="md:col-span-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan block">
                Reputasi Terbukti
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug">
                Dipercaya Ribuan Klien <br className="hidden sm:inline" />
                Dinas &amp; Perusahaan Nasional
              </h3>
            </div>

            <div className="md:col-span-3 text-left md:text-center border-l-0 md:border-l border-white/20 pl-0 md:pl-8">
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-cyan leading-none font-mono">
                <AnimatedCounter target={9262} suffix="+" separator="," />
              </h2>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mt-2">
                Perjalanan Sukses
              </p>
            </div>

            <div className="md:col-span-3 text-left md:text-center border-l-0 md:border-l border-white/20 pl-0 md:pl-8">
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-brand-cyan leading-none font-mono">
                <AnimatedCounter target={10} suffix="+" />
              </h2>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mt-2">
                Tahun Melayani Madiun
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Real Institutional Logos */}
        <div className="pt-12">
          <ScrollReveal direction="up">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-200/90 mb-8">
              Partner Perjalanan Instansi &amp; Korporasi Terkemuka
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" staggerChildren={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
              {REAL_PARTNER_LOGOS.map((item, idx) => (
                <ScrollRevealItem key={idx}>
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 h-24 flex items-center justify-center border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 group">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
