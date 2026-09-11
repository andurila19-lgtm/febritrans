import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function HowToBook() {
  const steps = [
    {
      step: "01",
      badge: "Langkah 1",
      title: "Chat WhatsApp Kami",
      desc: "Kirimkan detail tanggal, jam penjemputan, tujuan rute, dan pilihan armada yang diinginkan.",
      action: "Fast Response 24 Jam",
    },
    {
      step: "02",
      badge: "Langkah 2",
      title: "Konfirmasi & Atur Jadwal",
      desc: "Kami kirimkan rincian tarif transparan, ketersediaan unit pilihan, serta profil sopir terverifikasi.",
      action: "Tanpa Biaya Tersembunyi",
    },
    {
      step: "03",
      badge: "Langkah 3",
      title: "Penjemputan Tepat Waktu",
      desc: "Sopir kami standby di lokasi lebih awal. Perjalanan nyaman, berkelas, dan aman siap dinikmati.",
      action: "Garansi Standby Tepat Waktu",
    },
  ];

  return (
    <section id="pemesanan" className="w-full py-20 lg:py-28 bg-[#0F2547] relative overflow-hidden text-white border-y border-white/10">
      {/* Decorative background glow circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Cara Pemesanan
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              3 Langkah Mudah <span className="text-brand-cyan">Sewa Mobil</span>
            </h2>
            <p className="text-base text-slate-300 font-normal">
              Booking praktis tanpa birokrasi berbelit. Pesan sekarang melalui WhatsApp resmi kami.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Columns with connecting aesthetic */}
        <ScrollReveal direction="up" staggerChildren={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((item, idx) => (
              <ScrollRevealItem key={idx}>
                <div className="relative group flex flex-col h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  {/* Step Number Background Ghost */}
                  <span className="absolute top-4 right-6 text-5xl font-black text-white/5 group-hover:text-brand-cyan/15 transition-colors select-none font-mono">
                    {item.step}
                  </span>

                  {/* Step Outline Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-blue/80 text-white font-bold text-xs uppercase tracking-wider border border-brand-cyan/30 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-brand-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Step Benefit Footer */}
                  <div className="pt-6 mt-6 border-t border-white/10 text-xs font-semibold text-brand-cyan flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item.action}</span>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
