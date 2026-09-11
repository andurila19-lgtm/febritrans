"use client";

import { useState } from "react";
import { FLEET_DATA, Vehicle, getWhatsAppBookingUrl } from "@/data/fleet";

export default function FleetCatalog() {
  const [activeCategory, setActiveCategory] = useState<"all" | "mobil" | "motor">("all");

  const filteredVehicles = FLEET_DATA.filter((v) => {
    if (activeCategory === "all") return true;
    return v.category === activeCategory;
  });

  return (
    <section id="armada" className="w-full py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Armada Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Pilihan kendaraan yang tersedia untuk disewa.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 self-start md:self-end">
            {[
              { key: "all" as const, label: "Semua" },
              { key: "mobil" as const, label: "Mobil" },
              { key: "motor" as const, label: "Motor" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                  activeCategory === tab.key
                    ? "bg-[#0463bf] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800 hover:bg-white/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredVehicles.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>

        {/* Price Note */}
        <p className="text-center text-xs text-slate-400 mt-8 max-w-md mx-auto">
          Harga dapat menyesuaikan durasi dan kebutuhan sewa. Hubungi kami untuk informasi lebih lanjut.
        </p>
      </div>
    </section>
  );
}

function VehicleCard({ car }: { car: Vehicle }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[3/2] bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              {car.name}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
              <span>{car.capacity}</span>
              <span className="text-slate-200">·</span>
              <span>{car.transmission}</span>
            </div>
          </div>

          {/* Price */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-400">Mulai dari</p>
            <p className="font-heading font-bold text-xl text-slate-900">
              {car.startingPrice}
              <span className="text-sm font-normal text-slate-400">/hari</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <a
            href={getWhatsAppBookingUrl(car.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0463bf] hover:bg-[#034e96] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors"
          >
            Cek Ketersediaan
          </a>
        </div>
      </div>
    </div>
  );
}
