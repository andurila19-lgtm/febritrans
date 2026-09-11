import { Car, UserCheck, DollarSign, ShieldCheck, FileText } from "lucide-react";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function ServicesSolutionSection() {
  const row1 = [
    {
      icon: Car,
      title: "Armada Bersih & Nyaman",
      desc: "Mobil rutin diservis resmi, interior harum higienis, AC dingin menggigit, dan sangat prima untuk penjemputan tamu VIP.",
    },
    {
      icon: UserCheck,
      title: "Driver Berpengalaman & Sopan",
      desc: "Driver kami terlatih membawa pejabat & eksekutif. Tepat waktu, paham etika berkendara, dan hafal jalur alternatif Jawa Timur.",
    },
    {
      icon: DollarSign,
      title: "Harga Transparan Tanpa Tipu",
      desc: "Tarif pasti sejak awal. Tanpa biaya siluman mendadak di tengah jalan. Bebas pilih paket All-in atau mobil + driver.",
    },
  ];

  const row2 = [
    {
      icon: ShieldCheck,
      title: "Pendampingan Penuh Perjalanan",
      desc: "Customer service responsif siap membantu penyesuaian rundown dadakan, perpanjangan jam sewa, hingga pergantian armada darurat.",
    },
    {
      icon: FileText,
      title: "Invoice & Dokumen Resmi",
      desc: "Lengkap dengan kuitansi, faktur resmi, dan stempel basah legal untuk kemudahan SPJ dan reimbursement dinas perusahaan.",
    },
  ];

  return (
    <section id="layanan" className="w-full py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white border-b border-slate-100 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/60 text-brand-blue text-xs font-bold uppercase tracking-wider">
              Layanan Kami
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              Solusi Transportasi Andal Untuk <br className="hidden sm:inline" />
              <span className="text-brand-blue">Perjalanan Bisnis, Wisata, &amp; Dinas</span>
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
              Kami memadukan armada berkelas dengan pelayanan sopir berstandar profesional demi kelancaran agenda Anda di Madiun Raya.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Infobox Cards: Row 1 has 3 items, Row 2 has 2 items */}
        <div className="space-y-6">
          {/* Row 1: 3 Columns */}
          <ScrollReveal direction="up" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row1.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <ScrollRevealItem key={idx}>
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-8 text-center flex flex-col items-center justify-start space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/40 transition-all duration-300 group h-full">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-inner">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollRevealItem>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Row 2: 2 Columns */}
          <ScrollReveal direction="up" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {row2.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <ScrollRevealItem key={idx}>
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-8 text-center flex flex-col items-center justify-start space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/40 transition-all duration-300 group h-full">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-inner">
                        <IconComp className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollRevealItem>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
