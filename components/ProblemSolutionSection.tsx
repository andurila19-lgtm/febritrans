import ScrollReveal from "@/components/ScrollReveal";

export default function ProblemSolutionSection() {
  const problems = [
    {
      title: "Waktu & Tenaga Terkuras",
      desc: "Menyetir sendiri dalam perjalanan dinas jarak jauh membuat stamina drop sebelum meeting dimulai.",
    },
    {
      title: "Armada Tidak Terawat",
      desc: "AC bau, suspensi keras, dan interior kotor mengganggu kenyamanan rekan bisnis atau keluarga Anda.",
    },
    {
      title: "Risiko Telat & Buta Rute",
      desc: "Driver amatir yang tidak paham jalan tikus Madiun-Surabaya berisiko membuat Anda ketinggalan agenda.",
    },
    {
      title: "Dokumen & Invoice Tak Jelas",
      desc: "Kebutuhan SPJ kantor sering terhambat jika rental tidak menyediakan invoice resmi berstempel.",
    },
  ];

  return (
    <section id="kenapa-kami" className="w-full py-20 lg:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-60 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Vehicle Presentation */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={0.6}>
              <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-sky-50/40 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-brand-blue border border-sky-200">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                    Unit Ready
                  </span>
                </div>

                <div className="relative w-full h-64 sm:h-80 flex items-center justify-center p-4">
                  <img
                    src="https://senatransport.co.id/wp-content/uploads/2025/12/Innova-Reborn.webp"
                    alt="Armada Febri Trans Madiun - Innova Reborn"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/80 text-center shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue block">
                    📍 Garasi Kelun, Kartoharjo, Kota Madiun
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-800 mt-1">
                    Armada Bersih, Wangi, &amp; Prima — Siap Antar Jemput Kapan Saja
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title & Check List */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" duration={0.6}>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                  Kenapa Febri Trans?
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
                  Masalah Perjalanan Anda, <br />
                  <span className="text-brand-blue">Kami Bereskan Tuntas</span>
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed font-normal pt-1">
                Perjalanan dinas, bisnis, atau liburan keluarga butuh kepastian. Kami hadir memutus semua kekhawatiran sewa mobil yang sering Anda alami di Madiun.
              </p>

              {/* Checked List with Descriptions */}
              <div className="space-y-4 pt-3">
                {problems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="text-brand-blue shrink-0 mt-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-normal mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
