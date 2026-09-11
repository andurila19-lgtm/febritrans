import { CheckCircle2, Layers, MessageSquare, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: CheckCircle2,
      title: "Armada Terawat & Wangi",
      desc: "Setiap unit mobil dan motor dibersihkan secara menyeluruh, bebas bau asap rokok, ber-AC dingin segar, dan selalu wangi untuk kenyamanan total Anda.",
    },
    {
      icon: Layers,
      title: "Mobil & Motor Lengkap",
      desc: "Satu pintu solusi untuk berbagai kebutuhan. Mulai dari motor matik lincah untuk keliling kota hingga MPV keluarga dan eksekutif siap jalan.",
    },
    {
      icon: MessageSquare,
      title: "Respon Cepat WhatsApp",
      desc: "Respon cepat hitungan menit. Admin kami siap melayani konsultasi unit, estimasi biaya sewa, dan jadwal keberangkatan 24 jam nonstop.",
    },
    {
      icon: MapPin,
      title: "Antar Jemput Fleksibel",
      desc: "Layanan pengantaran dan pengambilan unit di Stasiun Kereta Madiun, terminal, hotel/penginapan, instansi kantor, atau langsung ke alamat rumah Anda.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89D42] block">
              Standar Keunggulan
            </span>
            <h2 className="font-newsreader text-3xl sm:text-5xl font-normal text-[#121314] tracking-tight leading-tight">
              Kenapa Memilih Febri Trans?
            </h2>
            <p className="text-sm text-[#44474A] leading-relaxed">
              Kami memadukan kesiapan teknis kendaraan dengan dedikasi pelayanan personal,
              menghadirkan rasa tenang, aman, dan nyaman di setiap kilometer perjalanan Anda di Madiun.
            </p>

            <div className="p-5 bg-[#FAF9F6] border border-[#E2DFD8] space-y-2 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C89D42]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#121314]">
                  Standar Garasi Kelun
                </span>
              </div>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                Pengecekan teliti tekanan angin ban, oli mesin, performa rem, dan pembersihan kabin sebelum diserahterimakan kepada penyewa.
              </p>
            </div>
          </div>

          {/* Right Grid (4 Pillars) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2DFD8] p-7 hover:border-[#121314] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E2DFD8] flex items-center justify-center mb-5">
                      <IconComp className="w-5 h-5 text-[#C89D42]" />
                    </div>
                    <h3 className="font-newsreader text-xl text-[#121314] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#44474A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
