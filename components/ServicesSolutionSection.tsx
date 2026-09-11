import { Car, UserCheck, Calendar } from "lucide-react";

export default function ServicesSolutionSection() {
  const services = [
    {
      icon: Car,
      title: "Lepas Kunci",
      desc: "Sewa kendaraan untuk kebutuhan pribadi.",
    },
    {
      icon: UserCheck,
      title: "Dengan Driver",
      desc: "Untuk perjalanan yang membutuhkan pengemudi.",
    },
    {
      icon: Calendar,
      title: "Sewa Harian / Mingguan",
      desc: "Pilihan durasi sesuai kebutuhan.",
    },
  ];

  return (
    <section id="layanan" className="w-full py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Layanan Rental
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Pilihan layanan sewa kendaraan di Febri Trans.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-8 text-center flex flex-col items-center space-y-4 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-50 text-[#0463bf] flex items-center justify-center">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
