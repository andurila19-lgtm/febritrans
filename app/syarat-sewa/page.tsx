import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import BackToTop from "@/components/BackToTop";
import { getWhatsAppBookingUrl, DISPLAY_PHONE } from "@/data/fleet";
import {
  FileText,
  ShieldCheck,
  Clock,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Sewa Mobil & Motor Madiun",
  description:
    "Panduan persyaratan sewa mobil dan motor lepas kunci di Febri Trans Madiun. Verifikasi dokumen mudah dan cepat via WhatsApp. Info: 0857-0415-5999.",
};

export default function SyaratSewaPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-brand-bg">
        <PageHeader
          badge="Ketentuan Sewa"
          title="Syarat & Prosedur Rental"
          description="Panduan transparan mengenai dokumen persyaratan, tata cara verifikasi, dan ketentuan pemakaian armada demi kenyamanan serta keamanan bersama."
          breadcrumb={[
            { label: "Beranda", href: "/" },
            { label: "Syarat Sewa" },
          ]}
        />

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Quick Process Flow */}
            <div className="bg-white border border-brand-border p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark mb-6 tracking-tight">
                3 Langkah Verifikasi Cepat
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-brand-surface border border-brand-border">
                  <span className="text-amber-500 font-extrabold text-xl block mb-2">01</span>
                  <h3 className="font-bold text-base text-brand-dark mb-1">Kirim Foto Dokumen</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Kirimkan foto KTP dan SIM (serta dokumen pendukung lainnya) melalui chat WhatsApp admin kami.
                  </p>
                </div>
                <div className="p-5 bg-brand-surface border border-brand-border">
                  <span className="text-amber-500 font-extrabold text-xl block mb-2">02</span>
                  <h3 className="font-bold text-base text-brand-dark mb-1">Verifikasi Data Cepat</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Admin melakukan pengecekan data secara profesional dalam beberapa menit.
                  </p>
                </div>
                <div className="p-5 bg-brand-surface border border-brand-border">
                  <span className="text-amber-500 font-extrabold text-xl block mb-2">03</span>
                  <h3 className="font-bold text-base text-brand-dark mb-1">Serah Terima Kendaraan</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Tanda tangan form sewa, pengecekan fisik unit bersama, dan kendaraan siap Anda gunakan.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Requirements Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category A: Perorangan / Wisatawan */}
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Sewa Perorangan & Wisatawan</h3>
                    <p className="text-xs text-slate-500">Syarat umum bagi penyewa lepas kunci</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>KTP Asli</strong> (Kartu Tanda Penduduk) yang masih berlaku.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>SIM A</strong> (untuk mobil) atau <strong>SIM C</strong> (untuk sepeda motor).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Dokumen Tambahan</strong> seperti Kartu Keluarga (KK), ID Pegawai / Kartu Mahasiswa, atau tiket kereta api kedatangan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Jaminan / Deposit</strong> berupa sepeda motor pribadi yang ditinggal atau jaminan lain sesuai kesepakatan.</span>
                  </li>
                </ul>
              </div>

              {/* Category B: Instansi / Perusahaan / Dinas */}
              <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6 shadow-xs">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Instansi & Perusahaan</h3>
                    <p className="text-xs text-slate-500">Keperluan dinas, proyek, atau tamu kedinasan</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Surat Tugas / Surat Pemesanan Resmi</strong> dari instansi atau perusahaan bersangkutan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Identitas PIC / Penanggung Jawab</strong> (KTP dan ID Pegawai / Kartu Nama).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>SIM Pengemudi</strong> yang akan mengoperasikan kendaraan selama agenda dinas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tersedia opsi invoice resmi dan tanda terima untuk kebutuhan laporan pertanggungjawaban (SPJ).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* General Rules & Usage Policies */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 md:p-10 space-y-6 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Ketentuan Pemakaian Kendaraan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <h4>Durasi & Waktu Pengembalian</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Waktu sewa dihitung 24 jam per hari. Keterlambatan pengembalian unit harap diinformasikan minimal 2 jam sebelumnya. Biaya overtime berlaku proporsional.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <h4>Kondisi Bahan Bakar & Kebersihan</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Bahan bakar dikembalikan sesuai indikator saat pertama kali diserahkan. Penyewa diharapkan menjaga kebersihan interior dan dilarang merokok di dalam mobil.
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Box */}
            <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white rounded-lg p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Konsultasikan Syarat Sewa Anda Sekarang
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 max-w-lg">
                  Setiap situasi bisa berbeda. Hubungi admin kami untuk mendiskusikan kelengkapan dokumen alternatif yang Anda miliki.
                </p>
              </div>

              <a
                href={getWhatsAppBookingUrl("", "Halo Febri Trans, saya ingin menanyakan ketentuan syarat sewa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Admin WhatsApp ({DISPLAY_PHONE})</span>
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
