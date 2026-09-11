"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import VehicleCard from "@/components/VehicleCard";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import { FLEET_DATA, getWhatsAppBookingUrl } from "@/data/fleet";
import { MessageCircle, ShieldCheck } from "lucide-react";

export default function ArmadaPage() {
  const [filter, setFilter] = useState<"semua" | "mobil" | "motor">("semua");

  const filteredFleet = FLEET_DATA.filter((v) => {
    if (filter === "semua") return true;
    return v.category === filter;
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Katalog Kendaraan"
          title="Pilihan Armada Febri Trans"
          description="Mobil dan motor terawat, bersih, dan siap pakai untuk berbagai kebutuhan perjalanan Anda di Kota Madiun dan sekitarnya."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Armada" },
          ]}
        />

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs & Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
              <div className="flex items-center space-x-1 p-1 bg-white border border-slate-200 rounded-lg shadow-xs">
                <button
                  onClick={() => setFilter("semua")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                    filter === "semua"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  Semua ({FLEET_DATA.length})
                </button>
                <button
                  onClick={() => setFilter("mobil")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                    filter === "mobil"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  Mobil ({FLEET_DATA.filter((v) => v.category === "mobil").length})
                </button>
                <button
                  onClick={() => setFilter("motor")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
                    filter === "motor"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                >
                  Motor ({FLEET_DATA.filter((v) => v.category === "motor").length})
                </button>
              </div>

              <div className="text-xs text-slate-500">
                Menampilkan <span className="font-bold text-slate-900">{filteredFleet.length}</span> kendaraan siap jalan
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFleet.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>

            {/* Help Callout */}
            <div className="mt-14 bg-sky-50/70 border border-sky-200 rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">
                  Tidak menemukan tipe kendaraan yang Anda cari?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  Hubungi staf kami melalui WhatsApp untuk konfirmasi ketersediaan unit alternatif, jadwal sewa khusus, atau permintaan paket durasi mingguan.
                </p>
              </div>

              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin konsultasi ketersediaan armada lain.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded shadow-xs transition-all shrink-0 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Armada via WA</span>
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
