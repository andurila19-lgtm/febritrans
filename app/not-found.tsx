import Link from "next/link";
import { ArrowLeft, Home, Car, Phone } from "lucide-react";
import { DISPLAY_PHONE } from "@/data/fleet";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full bg-white border border-brand-border p-8 sm:p-12 shadow-card">
        <span className="font-heading font-extrabold text-7xl text-brand-accent/30 block mb-3">
          404
        </span>
        <h1 className="font-heading font-extrabold text-2xl text-brand-dark mb-2">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mb-8 leading-relaxed">
          Halaman yang Anda tuju tidak tersedia atau telah dipindahkan ke struktur baru.
        </p>

        <div className="flex flex-col gap-2.5 text-xs font-bold uppercase tracking-wider">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-dark text-white hover:bg-stone-800 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Ke Beranda Utama</span>
          </Link>
          <Link
            href="/armada"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-surface border border-brand-border text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
          >
            <Car className="w-3.5 h-3.5" />
            <span>Lihat Pilihan Armada</span>
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 text-brand-muted hover:text-brand-dark transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Bantuan WhatsApp ({DISPLAY_PHONE})</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
