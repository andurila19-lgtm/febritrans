"use client";

import { useState } from "react";
import { MessageSquare, Users, Fuel, Gauge, Sparkles } from "lucide-react";
import { FLEET_CATALOG_DATA, Vehicle, getWhatsAppBookingUrl } from "@/data/fleet";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";

export default function FleetCatalog() {
  const [activeCategory, setActiveCategory] = useState<"all" | "mobil" | "minibus" | "motor">("all");

  const filteredVehicles = FLEET_CATALOG_DATA.filter((v) => {
    if (activeCategory === "all") return true;
    return v.category === activeCategory;
  });

  const getBadgeClass = (badge?: string) => {
    if (!badge) return "";
    const b = badge.toLowerCase();
    if (b.includes("populer") || b.includes("terlaris")) {
      return "bg-emerald-600 text-white shadow-sm";
    }
    if (b.includes("vip") || b.includes("mewah") || b.includes("premium")) {
      return "bg-amber-600 text-white shadow-sm";
    }
    if (b.includes("rombongan") || b.includes("wisata")) {
      return "bg-indigo-600 text-white shadow-sm";
    }
    return "bg-brand-blue text-white shadow-sm";
  };

  return (
    <section id="armada" className="w-full py-20 lg:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Title & Filter Tabs */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider">
                Daftar Unit &amp; Tarif
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
                Pilihan Armada <span className="text-brand-blue">Febri Trans</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Pilihan kendaraan terawat untuk kebutuhan dinas, bisnis, keluarga, dan motor harian di Kota Madiun dengan tarif jujur tanpa biaya siluman.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200 self-start md:self-end">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-brand-blue text-white shadow-md"
                    : "text-slate-600 hover:text-brand-blue hover:bg-white/60"
                }`}
              >
                Semua Armada
              </button>
              <button
                onClick={() => setActiveCategory("mobil")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  activeCategory === "mobil"
                    ? "bg-brand-blue text-white shadow-md"
                    : "text-slate-600 hover:text-brand-blue hover:bg-white/60"
                }`}
              >
                Mobil Dinas / MPV
              </button>
              <button
                onClick={() => setActiveCategory("minibus")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  activeCategory === "minibus"
                    ? "bg-brand-blue text-white shadow-md"
                    : "text-slate-600 hover:text-brand-blue hover:bg-white/60"
                }`}
              >
                Hiace &amp; Minibus
              </button>
              <button
                onClick={() => setActiveCategory("motor")}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                  activeCategory === "motor"
                    ? "bg-brand-blue text-white shadow-md"
                    : "text-slate-600 hover:text-brand-blue hover:bg-white/60"
                }`}
              >
                Motor Matik
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl overflow-hidden hover:border-brand-blue/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-white to-slate-50/50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-200/60">
                {car.badge && (
                  <span className={`absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${getBadgeClass(car.badge)}`}>
                    {car.badge}
                  </span>
                )}
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 drop-shadow"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-md">
                      {car.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {car.capacity}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-brand-blue transition-colors">
                    {car.name}
                  </h3>

                  {/* Pricing Breakdown Box */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Lepas Kunci:</span>
                      <span className="font-bold text-slate-900 font-mono text-sm">
                        {car.lepasKunciPrice || car.startingPrice}
                      </span>
                    </div>
                    {car.allInPrice && car.allInPrice !== "-" && (
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                        <span className="text-slate-500 font-medium">Mobil + Sopir:</span>
                        <span className="font-bold text-amber-600 font-mono text-sm">
                          {car.allInPrice}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 text-xs py-1">
                  {car.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-slate-600 border-b border-slate-100/80 pb-1 last:border-0">
                      <span className="text-slate-400 font-normal">{spec.label}</span>
                      <span className="font-semibold text-slate-800">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppBookingUrl(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cek Ketersediaan Unit</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
