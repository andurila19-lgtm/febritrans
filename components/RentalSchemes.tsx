import { Check, UserCheck, Shield, Clock, CalendarDays } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/fleet";

export default function RentalSchemes() {
  return (
    <section id="layanan" className="w-full bg-white py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="max-w-xl mb-12 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89D42] block">
            Fleksibilitas Tanpa Kompromi
          </span>
          <h2 className="font-newsreader text-3xl sm:text-5xl font-normal text-[#121314] tracking-tight">
            Pilihan Skema Rental
          </h2>
          <p className="text-sm text-[#6E6B65]">
            Sesuaikan metode berkendara dengan kebutuhan mobilitas dan preferensi perjalanan Anda di Jawa Timur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 01 Lepas Kunci */}
          <div className="bg-[#FAF9F6] border border-[#E2DFD8] p-8 flex flex-col justify-between hover:border-[#121314] transition-colors">
            <div>
              <span className="font-newsreader text-4xl sm:text-5xl font-normal text-[#C89D42] block mb-4">
                01
              </span>
              <h3 className="font-newsreader text-2xl text-[#121314] mb-3">
                Lepas Kunci
              </h3>
              <p className="text-sm text-[#44474A] leading-relaxed mb-6">
                Privasi maksimal untuk perjalanan keluarga atau agenda perorangan Anda.
                Kendarai sendiri dengan persyaratan verifikasi identitas yang ringkas dan serah terima unit cepat.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2DFD8]">
              <ul className="space-y-3 text-xs text-[#44474A]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Bebas rute Madiun, Magetan, Ngawi &amp; sekitarnya</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Waktu operasional fleksibel 24 jam penuh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Unit wangi dan bersih dicuci sebelum serah terima</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 02 Dengan Pengemudi (High-Contrast Obsidian Hero Card) */}
          <div className="bg-[#121314] text-[#FAF9F6] border border-[#121314] p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-newsreader text-4xl sm:text-5xl font-normal text-[#FFDEA3] block">
                  02
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-white/10 text-[#FFDEA3] border border-white/20">
                  Layanan Rekomendasi
                </span>
              </div>
              <h3 className="font-newsreader text-2xl text-white mb-3">
                Dengan Pengemudi
              </h3>
              <p className="text-sm text-[#C5C6C9] leading-relaxed mb-6">
                Perjalanan bebas lelah bersama sopir lokal berpengalaman, sopan, menguasai rute jalan tol Trans Jawa, wisata Sarangan, instansi pemerintahan, dan kuliner khas Madiun.
              </p>
            </div>

            <div className="pt-6 border-t border-white/15">
              <ul className="space-y-3 text-xs text-[#E3E2E0]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FFDEA3] shrink-0" />
                  <span>Pengemudi terlatih, ramah, dan tepat waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FFDEA3] shrink-0" />
                  <span>Tanpa kewajiban deposit jaminan identitas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FFDEA3] shrink-0" />
                  <span>Tersedia paket lengkap mobil + driver + BBM + Tol</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 03 Harian / Mingguan / Bulanan */}
          <div className="bg-[#FAF9F6] border border-[#E2DFD8] p-8 flex flex-col justify-between hover:border-[#121314] transition-colors">
            <div>
              <span className="font-newsreader text-4xl sm:text-5xl font-normal text-[#C89D42] block mb-4">
                03
              </span>
              <h3 className="font-newsreader text-2xl text-[#121314] mb-3">
                Harian / Mingguan
              </h3>
              <p className="text-sm text-[#44474A] leading-relaxed mb-6">
                Dukungan durasi sewa yang adaptif untuk proyek BUMN, penugasan dinas kantor pemerintah Kota/Kab Madiun, mobilisasi acara pernikahan, maupun masa libur panjang.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2DFD8]">
              <ul className="space-y-3 text-xs text-[#44474A]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Tarif hemat khusus sewa mingguan &amp; bulanan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Dukungan faktur resmi &amp; kontrak korporasi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C89D42] shrink-0" />
                  <span>Garansi unit pengganti jika ada kendala di jalan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
