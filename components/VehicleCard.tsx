import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Cog, ArrowRight, MessageCircle } from "lucide-react";
import { Vehicle, getWhatsAppBookingUrl } from "@/data/fleet";

interface VehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
}

export default function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  const waUrl = getWhatsAppBookingUrl(vehicle.name);

  return (
    <article className="group bg-white border border-brand-border flex flex-col justify-between transition-all duration-200 hover:border-brand-dark/40">
      {/* Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface border-b border-brand-border">
        <Image
          src={vehicle.imageUrl}
          alt={`Rental ${vehicle.name} Madiun`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-center"
        />
        <div className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-xs text-white ${
          vehicle.category === "mobil" ? "bg-sky-600" : "bg-amber-600"
        }`}>
          {vehicle.category === "mobil" ? "Mobil" : "Motor"}
        </div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-semibold px-2 py-0.5 rounded border border-slate-200">
          {vehicle.vehicleType}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              <Link href={`/armada/${vehicle.slug}`}>
                {vehicle.name}
              </Link>
            </h3>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 text-xs text-slate-600 py-2 mb-3 border-y border-slate-100">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-sky-600" />
              <span>{vehicle.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cog className="w-3.5 h-3.5 text-sky-600" />
              <span>{vehicle.transmission}</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {vehicle.description}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">Tarif Mulai</span>
            <div className="text-right">
              <span className="text-base font-extrabold text-sky-600">{vehicle.startingPrice}</span>
              <span className="text-xs text-slate-500"> / 24 Jam</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/armada/${vehicle.slug}`}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-colors whitespace-nowrap"
            >
              <span>Detail</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-xs transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Sewa</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
