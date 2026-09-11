import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <span className="font-heading font-black text-7xl sm:text-8xl text-brand-blue/20 block mb-4">
        404
      </span>
      <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-sm text-slate-600 max-w-md mb-8 leading-relaxed">
        Halaman yang Anda tuju tidak tersedia atau sudah dipindahkan. Silakan
        kembali ke beranda resmi Febri Trans Madiun.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
