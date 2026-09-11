import Link from "next/link";
import { getWhatsAppBookingUrl } from "@/data/fleet";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function HowToBook() {
  const steps = [
    {
      step: "01",
      title: "Pilih Kendaraan",
      desc: "Tentukan mobil atau motor sesuai kapasitas penumpang, rute, dan jenis transmisi yang diinginkan.",
    },
    {
      step: "02",
      title: "Chat WhatsApp",
      desc: "Hubungi admin Febri Trans untuk memastikan ketersediaan unit pada tanggal pemakaian Anda.",
    },
    {
      step: "03",
      title: "Kirim Dokumen",
      desc: "Kirim foto KTP dan SIM asli melalui WhatsApp untuk verifikasi cepat sebelum serah terima.",
    },
    {
      step: "04",
      title: "Serah Terima Unit",
      desc: "Ambil unit di garasi kami (Kelun, Madiun) atau manfaatkan layanan antar-jemput ke lokasi Anda.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Alur Booking Kendaraan
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 max-w-[60ch]">
              Proses pemesanan cepat dan mudah dalam 4 langkah langsung melalui WhatsApp resmi kami.
            </p>
          </div>

          <Link
            href="/syarat-sewa"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors shrink-0 group whitespace-nowrap"
          >
            <span>Syarat & Ketentuan</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200/90 rounded-lg p-6 flex flex-col justify-between shadow-xs hover:border-sky-400 hover:shadow-lg hover:shadow-sky-500/5 transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-heading font-black text-base flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  {item.step}
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-sky-50/70 border border-sky-200/70 p-5 rounded-lg">
          <p className="text-xs sm:text-sm font-medium text-slate-700">
            Butuh unit mendadak hari ini? Admin WhatsApp kami standby 24 jam nonstop siap melayani.
          </p>
          <a
            href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin pesan kendaraan sekarang.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
