import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FLEET_DATA } from "@/data/fleet";
import VehicleCard from "./VehicleCard";

export default function FeaturedFleet() {
  const featured = FLEET_DATA.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Armada Unggulan
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 max-w-[60ch]">
              Armada mobil dan motor terawat, siap sewa lepas kunci maupun dengan sopir berpengalaman.
            </p>
          </div>
          <Link
            href="/armada"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 transition-colors shrink-0 group whitespace-nowrap"
          >
            <span>Semua Armada ({FLEET_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((vehicle, idx) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
