import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import VehicleCard from "@/components/VehicleCard";
import {
  FLEET_DATA,
  getVehicleBySlug,
  getRelatedVehicles,
  getWhatsAppBookingUrl,
  DISPLAY_PHONE,
} from "@/data/fleet";
import {
  Users,
  Cog,
  Fuel,
  ShieldCheck,
  Check,
  MessageCircle,
  Phone,
  ArrowLeft,
  Calendar,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FLEET_DATA.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Kendaraan Tidak Ditemukan",
    };
  }

  return {
    title: `Sewa ${vehicle.name} Madiun — Tarif Mulai ${vehicle.startingPrice}`,
    description: `Rental ${vehicle.name} di Kota Madiun. ${vehicle.description} Buka 24 jam. Hubungi WhatsApp ${DISPLAY_PHONE}.`,
    openGraph: {
      title: `Rental ${vehicle.name} Madiun | Febri Trans`,
      description: vehicle.description,
      images: [
        {
          url: vehicle.imageUrl,
          alt: vehicle.name,
        },
      ],
    },
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const relatedVehicles = getRelatedVehicles(vehicle.slug, 3);
  const waUrl = getWhatsAppBookingUrl(vehicle.name);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg pt-24 pb-16 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Back Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 mb-6 border-b border-brand-border">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-[11px] text-brand-muted uppercase tracking-wider">
                <li>
                  <Link href="/" className="hover:text-brand-dark transition-colors">
                    Beranda
                  </Link>
                </li>
                <span className="text-brand-subtle">/</span>
                <li>
                  <Link href="/armada" className="hover:text-brand-dark transition-colors">
                    Armada
                  </Link>
                </li>
                <span className="text-brand-subtle">/</span>
                <li className="text-brand-dark font-semibold">
                  {vehicle.name}
                </li>
              </ol>
            </nav>

            <Link
              href="/armada"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted hover:text-brand-dark transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Semua Armada</span>
            </Link>
          </div>

          {/* Vehicle Detail Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Col: Vehicle Photo & Key Specs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-white border border-brand-border">
                <Image
                  src={vehicle.imageUrl}
                  alt={`Rental ${vehicle.name} Madiun`}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className={`absolute top-3 left-3 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-xs ${
                  vehicle.category === "mobil" ? "bg-sky-600" : "bg-amber-600"
                }`}>
                  {vehicle.category === "mobil" ? "Rental Mobil" : "Rental Motor"}
                </div>
              </div>

              {/* Spec Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 bg-white border border-slate-200 rounded-lg p-4 shadow-xs">
                <div className="flex flex-col items-center justify-center p-2 text-center border-r border-slate-100">
                  <Users className="w-5 h-5 text-sky-600 mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Kapasitas</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{vehicle.capacity}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 text-center border-r border-slate-100">
                  <Cog className="w-5 h-5 text-sky-600 mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Transmisi</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{vehicle.transmission}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 text-center">
                  <Fuel className="w-5 h-5 text-sky-600 mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Bahan Bakar</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">{vehicle.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Details, Pricing, and Booking Action */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-5 shadow-xs">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600">
                    {vehicle.vehicleType}
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {vehicle.name}
                  </h1>
                </div>

                {/* Price Display */}
                <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-lg">
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1 font-semibold">
                    Tarif Sewa
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-sky-600">
                      {vehicle.startingPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ 24 Jam</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1.5">
                    *Tarif dasar per hari / lepas kunci. Tersedia opsi dengan pengemudi.
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                    Tentang Kendaraan Ini
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                {/* Features & Inclusions */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                    Kondisi & Fasilitas Unit
                  </h2>
                  <ul className="space-y-1.5">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Buttons */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md shadow-emerald-600/20 transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Booking {vehicle.name} via WhatsApp</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                    <Link
                      href="/syarat-sewa"
                      className="py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-colors whitespace-nowrap"
                    >
                      Syarat Sewa
                    </Link>
                    <Link
                      href="/harga"
                      className="py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 rounded transition-colors whitespace-nowrap"
                    >
                      Daftar Harga
                    </Link>
                  </div>
                </div>

                {/* Quick Trust / Contact Info */}
                <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
                  <span>Buka 24 Jam</span>
                  <a
                    href={`tel:${DISPLAY_PHONE.replace(/-/g, "")}`}
                    className="hover:text-brand-dark font-medium"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Vehicles Section */}
          {relatedVehicles.length > 0 && (
            <div className="mt-16 pt-10 border-t border-brand-border">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-xl font-bold text-brand-dark">
                  Pilihan Armada Lainnya
                </h2>
                <Link
                  href="/armada"
                  className="text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-accent transition-colors"
                >
                  Lihat Semua ({FLEET_DATA.length}) →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedVehicles.map((rel) => (
                  <VehicleCard key={rel.id} vehicle={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}
