import { FileBadge, ShieldAlert, CheckCircle2, Train } from "lucide-react";

export default function RentalTerms() {
  return (
    <section id="syarat" className="w-full bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89D42] block">
              Ketentuan Transparan
            </span>
            <h2 className="font-newsreader text-3xl sm:text-5xl font-normal text-[#121314] tracking-tight leading-tight">
              Syarat Sewa Ringkas &amp; Jelas
            </h2>
            <p className="text-sm text-[#44474A] leading-relaxed">
              Kami menjunjung tinggi keamanan dan kenyamanan bersama melalui prosedur
              verifikasi dokumen yang ringkas, teratur, dan tanpa birokrasi berbelit.
            </p>

            <div className="p-5 bg-white border border-[#E2DFD8] space-y-2 mt-6">
              <div className="flex items-center gap-2 text-[#121314]">
                <Train className="w-4 h-4 text-[#C89D42]" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Kemudahan Pelanggan Stasiun Madiun:
                </span>
              </div>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                Bagi wisatawan luar kota yang tiba via Stasiun Kereta Api Madiun, verifikasi identitas dapat dilakukan terlebih dahulu via WhatsApp. Begitu Anda tiba, unit mobil atau motor langsung siap pakai di area penjemputan.
              </p>
            </div>
          </div>

          {/* Right 2-Card Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Dokumen Pokok */}
            <div className="bg-white border border-[#E2DFD8] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#121314]">
                  <FileBadge className="w-5 h-5 text-[#C89D42]" />
                  <h3 className="font-newsreader text-xl font-medium">
                    Dokumen Pokok
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-[#44474A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>KTP Asli:</strong> KTP Elektronik penyewa yang masih berlaku.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>SIM Aktif:</strong> SIM A untuk rental mobil, atau SIM C untuk rental motor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>Dokumen Pendukung:</strong> Kartu Keluarga (KK), ID Pegawai / Kartu Nama Kerja, atau Kartu Mahasiswa.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E2DFD8] text-[11px] text-[#6E6B65]">
                Dokumen difoto via WhatsApp untuk verifikasi awal.
              </div>
            </div>

            {/* Jaminan & Ketentuan Penggunaan */}
            <div className="bg-white border border-[#E2DFD8] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#121314]">
                  <ShieldAlert className="w-5 h-5 text-[#C89D42]" />
                  <h3 className="font-newsreader text-xl font-medium">
                    Jaminan &amp; Ketentuan
                  </h3>
                </div>

                <ul className="space-y-3 text-xs text-[#44474A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>Jaminan Lepas Kunci:</strong> Penitipan identitas asli atau unit motor pribadi (untuk penyewa lokal Madiun).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>Bebas Jaminan Rumit:</strong> Tidak diperlukan deposit ribet bila Anda memilih opsi sewa <em>Dengan Supir</em>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C89D42] shrink-0 mt-0.5" />
                    <span>
                      <strong>Area Penggunaan:</strong> Konfirmasikan rencana rute bila unit hendak dibawa ke luar wilayah Karisidenan Madiun.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E2DFD8] text-[11px] text-[#6E6B65]">
                Kerahasiaan data identitas pelanggan dijamin 100% aman.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
