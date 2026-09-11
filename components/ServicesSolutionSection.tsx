import Link from "next/link";
import { Key, UserCheck, Bike, ArrowRight } from "lucide-react";

export default function ServicesSolutionSection() {
  const services = [
    {
      icon: Key,
      title: "Rental Lepas Kunci",
      desc: "Fleksibilitas dan privasi maksimal menyetir sendiri untuk agenda keluarga, liburan, maupun urusan bisnis di Madiun.",
      link: "/layanan#lepas-kunci",
    },
    {
      icon: UserCheck,
      title: "Sewa dengan Sopir",
      desc: "Perjalanan bebas lelah bersama pengemudi berpengalaman yang paham rute Kota Madiun, Magetan, Ponorogo, dan Ngawi.",
      link: "/layanan#dengan-driver",
    },
    {
      icon: Bike,
      title: "Rental Sepeda Motor",
      desc: "Transportasi praktis, gesit, dan hemat bahan bakar untuk mobilitas harian di Madiun dengan fasilitas helm dan jas hujan.",
      link: "/layanan#rental-motor",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Layanan Rental Fleksibel
            </h2>
            <p className="mt-1.5 text-sm text-brand-muted max-w-[60ch]">
              Pilihan sistem sewa lepas kunci maupun dengan sopir yang dapat disesuaikan dengan kebutuhan Anda.
            </p>
          </div>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent transition-colors shrink-0 group whitespace-nowrap"
          >
            <span>Pelajari Semua Layanan</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-7 flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors whitespace-nowrap "
                >
                  <span>Detail Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
