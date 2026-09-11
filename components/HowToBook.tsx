import { getWhatsAppBookingUrl } from "@/data/fleet";

export default function HowToBook() {
  const steps = [
    {
      step: "01",
      title: "Pilih Kendaraan",
      desc: "Lihat pilihan armada mobil dan motor yang tersedia.",
    },
    {
      step: "02",
      title: "Hubungi WhatsApp",
      desc: "Kirim pesan ke WhatsApp kami untuk menanyakan ketersediaan.",
    },
    {
      step: "03",
      title: "Konfirmasi Ketersediaan",
      desc: "Kami informasikan ketersediaan unit dan detail harga.",
    },
    {
      step: "04",
      title: "Booking",
      desc: "Sepakati jadwal dan selesaikan proses pemesanan.",
    },
  ];

  return (
    <section id="pemesanan" className="w-full py-16 lg:py-24 bg-[#0F2547] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Cara Booking
          </h2>
          <p className="text-sm text-slate-400">
            Proses pemesanan yang mudah melalui WhatsApp.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col"
            >
              {/* Step Number */}
              <span className="font-heading font-extrabold text-3xl text-[#01abe8]/20 mb-3">
                {item.step}
              </span>

              <h3 className="font-heading font-bold text-base text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0F2547] text-sm font-bold px-7 py-3.5 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 448 512" fill="#25D366" className="w-4 h-4" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
