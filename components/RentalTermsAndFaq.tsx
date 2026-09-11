"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2, FileText, MessageSquare } from "lucide-react";
import { getWhatsAppBookingUrl } from "@/data/fleet";
import ScrollReveal from "@/components/ScrollReveal";

export default function RentalTermsAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Hitungan Sewa Mobil & Motor",
      content: (
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong className="text-white">Hitungan Sewa:</strong> Sewa dihitung <strong>per tanggal (harian / per day)</strong> atau <strong>sistem 24 jam fleksibel</strong> sesuai kesepakatan saat reservasi awal.
          </p>
          <p>
            <strong className="text-white">Waktu Pengembalian:</strong> Untuk sewa sistem tanggal, unit mobil/motor wajib kembali ke garasi maksimal pukul <strong>23.00 WIB</strong> di hari yang sama. Untuk sistem 24 jam, pengembalian dihitung genap 24 jam sejak serah terima kunci.
          </p>
          <p>
            <strong className="text-white">Overtime:</strong> Keterlambatan pengembalian unit dikenakan biaya overtime wajar per jam yang diinformasikan transparan tanpa markup tersembunyi.
          </p>
        </div>
      ),
    },
    {
      title: "Syarat Pinjam Mobil Lepas Kunci Pelanggan Baru",
      content: (
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p className="font-semibold text-white">
            Persyaratan Lepas Kunci (Khusus Warga Kota Madiun &amp; Sekitarnya):
          </p>

          <div className="space-y-2 pl-2">
            <p className="font-bold text-brand-cyan">1. Jaminan Kendaraan</p>
            <p>Wajib menitipkan sepeda motor sebagai jaminan dengan ketentuan:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-slate-300">
              <li>Tahun pembuatan kendaraan <strong className="text-white">belum 5 tahun</strong> (keluaran terbaru).</li>
              <li>STNK asli wajib disertakan bersama motor.</li>
              <li>Motor dan STNK wajib <strong className="text-white">atas nama peminjam sendiri atau keluarga satu KK</strong>.</li>
            </ul>
          </div>

          <div className="space-y-2 pl-2">
            <p className="font-bold text-brand-cyan">2. Dokumen Identitas (Minimal 2 Identitas Asli)</p>
            <p>Seluruh dokumen wajib asli, masih berlaku (aktif), dan atas nama peminjam:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-slate-300">
              <li><strong className="text-white">Wajib:</strong> E-KTP Asli peminjam.</li>
              <li><strong className="text-white">SIM Aktif:</strong> SIM A (untuk mobil) atau SIM C (untuk motor).</li>
              <li>
                <strong className="text-white">Dokumen Pendukung (Pilih salah satu):</strong>
                <span className="block pl-4 text-xs text-slate-400 mt-1">
                  • Kartu Keluarga (KK) Asli<br />
                  • Bukti Pembayaran PBB / Rekening Listrik / PDAM<br />
                  • ID Card Karyawan / Kartu Pengenal Kantor BUMN / Instansi
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 border border-white/10 p-3.5 rounded-xl text-xs text-slate-200">
            <strong className="text-brand-cyan block mb-1">Khusus Tamu Wisata / Dinas Luar Kota via Stasiun Madiun:</strong>
            Verifikasi identitas (E-KTP, tiket kereta api, bukti reservasi hotel/surat tugas dinas) dapat dikirim terlebih dahulu via WhatsApp sebelum tiba di Madiun. Unit langsung diserahkan di lobi Stasiun Madiun.
          </div>
        </div>
      ),
    },
    {
      title: "Ketentuan Sewa & Tanggung Jawab Penyewa",
      content: (
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p className="font-semibold text-white">Ketentuan &amp; Tanggung Jawab Penyewa:</p>
          <ol className="list-decimal list-inside space-y-2 pl-1 text-xs sm:text-sm">
            <li>
              <strong className="text-white">Kondisi Unit:</strong> Penyewa wajib mengembalikan mobil/motor dalam keadaan utuh, baik, dan bersih seperti saat awal penyerahan kunci.
            </li>
            <li>
              <strong className="text-white">Tanggung Jawab Kerusakan:</strong> Segala kerusakan atau lecet yang timbul akibat kelalaian selama masa sewa menjadi tanggung jawab penuh penyewa (wajib mengganti/biaya perbaikan).
            </li>
            <li>
              <strong className="text-white">Larangan Pindah Tangan:</strong> Penyewa <strong className="text-rose-400">DILARANG KERAS</strong> memindahtangankan, meminjamkan kembali, atau menyewakan unit kepada pihak lain tanpa izin tertulis dari FEBRI TRANS.
            </li>
            <li>
              <strong className="text-white">Tujuan Penggunaan:</strong> Kendaraan hanya boleh digunakan untuk kegiatan positif dan tidak melanggar hukum perundang-undangan di Republik Indonesia.
            </li>
            <li>
              <strong className="text-white">Komunikasi:</strong> Penyewa wajib menjaga komunikasi tetap aktif dan mudah dihubungi (Telepon/WhatsApp) selama masa sewa berlangsung.
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "Layanan Sewa Dengan Sopir & Paket All-In",
      content: (
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Bagi tamu dinas instansi, korporasi, atau rombongan keluarga yang menginginkan kenyamanan tanpa rasa lelah, kami menyediakan opsi <strong className="text-white">Sewa Mobil Plus Supir Profesional</strong>.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
            <li><strong className="text-white">Bebas Jaminan Identitas Rumit:</strong> Tidak perlu menitipkan sepeda motor jaminan atau survei rumah.</li>
            <li><strong className="text-white">Driver Berpakaian Rapi &amp; Sopan:</strong> Terlatih paham etika protokol kedinasan dan ramah pada keluarga.</li>
            <li><strong className="text-white">Pilihan Paket All-In Praktis:</strong> Tersedia paket komplit (Mobil + Sopir + BBM + Tol) dengan rincian biaya pasti sejak awal tanpa biaya dadakan.</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="syarat-faq" className="w-full py-20 lg:py-28 bg-[#1E293B] text-white border-b border-slate-700/60 relative overflow-hidden">
      {/* Decorative Glow elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-blue/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-cyan/15 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-brand-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                FAQ &amp; Syarat Sewa
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
                Informasi Tarif, Syarat, &amp; <span className="text-brand-cyan">Ketentuan Sewa</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Kami menjunjung tinggi <strong>transparansi dan kenyamanan</strong> Anda. Seluruh syarat dirancang untuk keamanan kedua belah pihak demi perjalanan yang tenang dan menyenangkan.
              </p>

              <div className="pt-3">
                <a
                  href={getWhatsAppBookingUrl("", "Tanya Syarat & Ketentuan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi Syarat via WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Accordion Panes */}
          <div className="lg:col-span-7 space-y-3.5">
            <ScrollReveal direction="right">
              {accordionItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-slate-800/90 border-brand-cyan/40 shadow-lg shadow-black/20"
                        : "bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/60"
                    }`}
                  >
                    <button
                      onClick={() => toggleIndex(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                    >
                      <span className="font-heading font-bold text-base sm:text-lg text-white">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-cyan shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-6 pt-2 border-t border-slate-700/50 bg-slate-900/40">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
