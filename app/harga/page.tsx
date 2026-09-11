import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import { FLEET_DATA, getWhatsAppBookingUrl, DISPLAY_PHONE } from "@/data/fleet";
import { MessageCircle, Info, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Daftar Harga Sewa Mobil & Motor Madiun",
  description:
    "Transparansi tarif sewa mobil dan motor di Febri Trans Madiun. Harga mulai Rp 75.000 (motor) dan Rp 250.000 (mobil). Bebas biaya tersembunyi. WhatsApp: 0857-0415-5999.",
};

export default function HargaPage() {
  const cars = FLEET_DATA.filter((v) => v.category === "mobil");
  const bikes = FLEET_DATA.filter((v) => v.category === "motor");

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Tarif Transparan"
          title="Daftar Harga Rental Kendaraan"
          description="Informasi harga sewa mobil dan motor harian di Kota Madiun tanpa biaya tersembunyi. Layanan fleksibel lepas kunci maupun dengan sopir."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Harga" },
          ]}
        />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Table 1: Mobil */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
                  Tarif Rental Mobil
                </h2>
                <p className="text-xs text-brand-muted">
                  *Tarif dasar per 24 jam / lepas kunci
                </p>
              </div>

              <div className="bg-white border border-brand-border overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-surface border-b border-brand-border text-[11px] font-bold uppercase tracking-wider text-brand-dark">
                      <th className="py-3 px-6">Kendaraan</th>
                      <th className="py-3 px-4">Tipe</th>
                      <th className="py-3 px-4">Kapasitas</th>
                      <th className="py-3 px-4">Transmisi</th>
                      <th className="py-3 px-6 text-right">Tarif Mulai (24 Jam)</th>
                      <th className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border text-sm">
                    {cars.map((car) => {
                      const waLink = getWhatsAppBookingUrl(
                        car.name,
                        `Saya ingin menanyakan tarif sewa ${car.name}.`
                      );
                      return (
                        <tr key={car.id} className="hover:bg-sky-50/40 transition-colors">
                          <td className="py-3.5 px-6 font-bold text-slate-900">
                            <Link href={`/armada/${car.slug}`} className="hover:text-sky-600 transition-colors">
                              {car.name}
                            </Link>
                          </td>
                          <td className="py-3.5 px-4 text-xs text-slate-500">{car.vehicleType}</td>
                          <td className="py-3.5 px-4 text-xs text-slate-500">{car.capacity}</td>
                          <td className="py-3.5 px-4 text-xs text-slate-500">{car.transmission}</td>
                          <td className="py-3.5 px-6 text-right font-extrabold text-sky-600 text-base">
                            {car.startingPrice}
                          </td>
                          <td className="py-3.5 px-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Link
                                href={`/armada/${car.slug}`}
                                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-colors whitespace-nowrap"
                              >
                                Detail
                              </Link>
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-xs transition-colors whitespace-nowrap"
                              >
                                Pesan
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Sepeda Motor */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
                  Tarif Rental Sepeda Motor
                </h2>
                <p className="text-xs text-brand-muted">
                  *Sudah termasuk 2 helm + jas hujan
                </p>
              </div>

              <div className="bg-white border border-brand-border overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-surface border-b border-brand-border text-[11px] font-bold uppercase tracking-wider text-brand-dark">
                      <th className="py-3 px-6">Kendaraan</th>
                      <th className="py-3 px-4">Tipe</th>
                      <th className="py-3 px-4">Kapasitas</th>
                      <th className="py-3 px-4">Transmisi</th>
                      <th className="py-3 px-6 text-right">Tarif Mulai (24 Jam)</th>
                      <th className="py-3 px-6 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border text-sm">
                    {bikes.map((bike) => {
                      const waLink = getWhatsAppBookingUrl(
                        bike.name,
                        `Saya ingin menanyakan tarif rental motor ${bike.name}.`
                      );
                      return (
                        <tr key={bike.id} className="hover:bg-sky-50/40 transition-colors">
                          <td className="py-4 px-6 font-bold text-slate-900">
                            <Link href={`/armada/${bike.slug}`} className="hover:text-sky-600 transition-colors">
                              {bike.name}
                            </Link>
                          </td>
                          <td className="py-4 px-4 text-xs text-slate-500">{bike.vehicleType}</td>
                          <td className="py-4 px-4 text-xs text-slate-500">{bike.capacity}</td>
                          <td className="py-4 px-4 text-xs text-slate-500">{bike.transmission}</td>
                          <td className="py-4 px-6 text-right font-extrabold text-sky-600 text-base">
                            {bike.startingPrice}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Link
                                href={`/armada/${bike.slug}`}
                                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-colors"
                              >
                                Detail
                              </Link>
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-xs transition-colors"
                              >
                                Pesan
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Price Notes & Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h3>Durasi Fleksibel</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hitungan sewa standar adalah 24 jam terhitung sejak unit diserahterimakan. Anda juga bisa menyewa untuk durasi mingguan atau bulanan.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Info className="w-4 h-4 text-sky-600" />
                  <h3>Paket dengan Sopir</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tersedia opsi tambahan sopir berpengalaman untuk dalam maupun luar kota Madiun. Biaya disesuaikan dengan jarak dan lama penugasan.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <h3>Diskon Durasi Panjang</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dapatkan penawaran khusus dan potongan harga menarik untuk penyewaan mobil atau motor lebih dari 3 hari.
                </p>
              </div>
            </div>

            {/* Custom Consultation CTA */}
            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white p-8 sm:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Butuh Rincian Penawaran Khusus?
                </h3>
                <p className="text-sm text-sky-100 max-w-lg">
                  Konsultasikan rencana perjalanan Anda bersama admin kami untuk mendapatkan estimasi total biaya terbaik.
                </p>
              </div>

              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin menanyakan penawaran harga khusus sewa kendaraan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition-colors shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Harga Spesial ({DISPLAY_PHONE})</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
