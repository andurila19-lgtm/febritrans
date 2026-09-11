import { Camera } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Serah Terima Tepat Waktu di Lokasi Pelanggan",
      caption: "Stasiun Kereta Api Madiun / Garasi Kelun",
      span: "md:col-span-8 h-72 sm:h-96",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHtqYeH6Lg_e5FvEz33vtSkSqlZWwhS2KTzQCdivmxulyFwnA5p2b0lf7M18wXIUaJ8ccxpuvaysAIbL-tca-CK_qDG3tZ5TVXyCaT4wqjfMt4hReUa2mw96wqTZuQ2OveeXmX1p17XQWH7-5Jv95syxD_BTCu2FtCVS5ag7Q1o9MWS319Z9_b9ZWaSV2JV3j8ugQgNI1K-V5gnPr--Wl1lSPyK2tI0MjiC3UIneFQ4iWPC21CiU9Og",
    },
    {
      title: "Kabin Bersih, Wangi & Terawat",
      caption: "Standar Higienis Interior MPV",
      span: "md:col-span-4 h-72 sm:h-96",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBpY99Y8opanjIidE_kP2q6-Aab3TVV86r5-Dl4VHdTuY1PrxOmLsC8N8Dze2BK3-77YPEzJz5nZlJxmRR9GXSOtAWvfWpZM6tW_t1Sx6LdN2iMisrmkGe0ILxCHUXTVoyDmMPWe0osDpMneZT0ITc3f1QKei5lVFuYuWyFdxeaqmqa78X_ml3Sz5fPokAEiEaMfQn5avHaDSgSmGeFpG7eBafYTgYU-eN7-ihzjkXdI7XIOpBnfhy9iw",
    },
    {
      title: "Kesiapan Motor Harian di Garasi",
      caption: "Lengkap 2 Helm Bersih SNI & Jas Hujan",
      span: "md:col-span-4 h-72 sm:h-80",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPpeTOl8Ksth4OcfRqqp9R5XLdlM6KyjZBL62QSapKcbS-fZuiF8DjcJ6dm-jn_QHoBIpA5xpD8whjQrpCiND9HXqAcMBllXJkwukft-6h-1-mWXMRFzvWhMqnvbWRU809x70ZH9eN3iBugoIr2yunTYiyoPQtIxmGPDd2VOtgFVXRmcxSZtL4g-VrZvSgSNwBVm4ym4TLhfAfx3e2PixRsCNQeCarXKhNA6BledJ7FhnGwpC2T82c6Q",
    },
    {
      title: "Eksplorasi Wisata Madiun - Magetan - Sarangan",
      caption: "Tangguh di Jalur Menanjak Pegunungan Lawu",
      span: "md:col-span-8 h-72 sm:h-80",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCedBAtpZsk6SC3heFvqacaKvjih0rFMimDybvxOfr58Iu5uBbiXS9eT2guAZO609rBdW2EFmYFsSlda5QFb4ck4b_At_9JpydP-yFfjgsT7yLU4J-zM1tvTIcUz9v1vF-3wrHs3pGtalApGuQ4eqq8qCC9lidKm3QJqAgjIF1HRA_GSX2TBBPmhWCOlqB7I14KsbSG8MdWxj-dzbNquCayiq8czJxrZLYWzDbGKqv4WYyhWMeskGPnlw",
    },
  ];

  return (
    <section id="galeri" className="w-full bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E2DFD8]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89D42] block">
              Dokumentasi Nyata Garasi
            </span>
            <h2 className="font-newsreader text-3xl sm:text-5xl font-normal text-[#121314] tracking-tight">
              Kesiapan &amp; Penyerahan Armada
            </h2>
          </div>
          <p className="text-sm text-[#6E6B65] max-w-md leading-relaxed">
            Unit nyata di garasi Madiun kami, dipersiapkan dengan cermat untuk memastikan perjalanan Anda bebas gangguan teknis.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden border border-[#E2DFD8] bg-[#EFEEEB] group ${item.span}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121314]/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FFDEA3] block mb-1">
                  {item.caption}
                </span>
                <h3 className="font-newsreader text-lg sm:text-xl text-white font-normal">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
