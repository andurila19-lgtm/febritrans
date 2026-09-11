import { Star, ShieldCheck, FileText, Award } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="w-full bg-[#F4F3F1] py-14 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C89D42]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89D42]">
                Kredibilitas &amp; Reputasi Lokal
              </span>
            </div>
            <h2 className="font-newsreader text-2xl sm:text-3xl text-[#121314] tracking-tight leading-snug">
              Sudah dipercaya pelanggan di Kota Madiun &amp; sekitarnya.
            </h2>
            <p className="text-sm text-[#44474A] leading-relaxed">
              Melayani perjalanan dinas instansi pemerintahan Madiun, korporasi,
              wisatawan Telaga Sarangan, hingga penjemputan Stasiun Kereta Api Madiun 24 jam.
            </p>
          </div>

          {/* Right Proof Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Google Rating */}
            <div className="bg-white p-6 border border-[#E2DFD8] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#C89D42] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C89D42] text-[#C89D42]"
                    />
                  ))}
                </div>
                <div className="font-newsreader text-3xl font-semibold text-[#121314] mb-1">
                  4.8{" "}
                  <span className="text-sm font-normal text-[#6E6B65] font-sans">
                    / 5.0
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#6E6B65] font-medium leading-relaxed mt-2">
                297+ Ulasan Terverifikasi Google &amp; Pelanggan Langsung di Madiun
              </p>
            </div>

            {/* 100% Terawat */}
            <div className="bg-white p-6 border border-[#E2DFD8] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-[#FAF9F6] border border-[#E2DFD8] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#C89D42]" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#121314] mb-1">
                  100% Terawat
                </h3>
              </div>
              <p className="text-xs text-[#6E6B65] leading-relaxed mt-2">
                Servis berkala di bengkel resmi, AC selalu dingin optimal, dan ban selalu dalam kondisi prima.
              </p>
            </div>

            {/* Surat Lengkap */}
            <div className="bg-white p-6 border border-[#E2DFD8] flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 bg-[#FAF9F6] border border-[#E2DFD8] flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-[#C89D42]" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#121314] mb-1">
                  Surat Lengkap
                </h3>
              </div>
              <p className="text-xs text-[#6E6B65] leading-relaxed mt-2">
                STNK aktif, pajak hidup terjamin, serta jaminan proteksi keamanan saat berkendara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
