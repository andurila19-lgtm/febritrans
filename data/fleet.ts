export interface Vehicle {
  id: string;
  name: string;
  startingPrice: string;
  priceNum: number;
  lepasKunciPrice?: string;
  allInPrice?: string;
  category: "mobil" | "motor" | "minibus";
  type: string;
  capacity: string;
  transmission: string;
  fuel: string;
  imageUrl: string;
  badge?: string;
  featured?: boolean;
  specs: { label: string; value: string }[];
}

export const DISPLAY_PHONE = "0857-0415-5999";
export const WHATSAPP_NUMBER = "6285704155999";
export const EMAIL_ADDRESS = "kontak@febritrans.com";
export const LOCATION_ADDRESS = "Kelun, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63119";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cJbY3AfDVWTrxtFf8";

export const HERO_SHOWCASE_VEHICLES = [
  {
    name: "AVANZA FACELIFT",
    startingPrice: "Rp 275.000",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Screenshot-at-Dec-21-12-22-53-1-1.png",
    category: "MPV Hemat",
  },
  {
    name: "AVANZA ALL NEW",
    startingPrice: "Rp 350.000",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/lJOpmLKcnRzcmsFnIMityi8fmVQMSyewOHJETX1t.png",
    category: "MPV Favorit",
  },
  {
    name: "INNOVA REBORN",
    startingPrice: "Rp 500.000",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Innova-Reborn.webp",
    category: "Dinas & Bisnis",
  },
  {
    name: "INNOVA ZENIX HYBRID",
    startingPrice: "Rp 650.000",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/yREx2k0LGctmqV7goquDLFxzmB7DzuTupQNQWJzk.png",
    category: "Premium VIP",
  },
  {
    name: "HIACE PREMIO",
    startingPrice: "Rp 1.000.000",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Hiace-Premio-Luxury-1-min.png",
    category: "Rombongan / Dinas",
  },
];

export const FLEET_CATALOG_DATA: Vehicle[] = [
  {
    id: "avanza-facelift",
    name: "Avanza Facelift",
    startingPrice: "Rp 275.000",
    priceNum: 275000,
    lepasKunciPrice: "Rp 275.000 / hari",
    allInPrice: "Rp 450.000 / hari",
    category: "mobil",
    type: "MPV 7-Seater",
    capacity: "7 Orang",
    transmission: "Manual / Matic",
    fuel: "Bensin",
    badge: "Paling Hemat",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Screenshot-at-Dec-21-12-22-53-1-1.png",
    specs: [
      { label: "Kapasitas Kursi", value: "7 Penumpang" },
      { label: "Pilihan Transmisi", value: "Manual & Matic" },
      { label: "Sistem AC", value: "Double Blower Dingin" },
      { label: "Kondisi Unit", value: "Bersih, Wangi & Siap Jalan" },
    ],
  },
  {
    id: "avanza-all-new",
    name: "Avanza All New",
    startingPrice: "Rp 350.000",
    priceNum: 350000,
    lepasKunciPrice: "Rp 350.000 / hari",
    allInPrice: "Rp 550.000 / hari",
    category: "mobil",
    type: "MPV Modern 7-Seater",
    capacity: "7 Orang",
    transmission: "Matic CVT / Manual",
    fuel: "Bensin",
    badge: "Paling Populer",
    featured: true,
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/lJOpmLKcnRzcmsFnIMityi8fmVQMSyewOHJETX1t.png",
    specs: [
      { label: "Kapasitas Kursi", value: "7 Penumpang" },
      { label: "Pilihan Transmisi", value: "CVT Matic & Manual" },
      { label: "Kenyamanan", value: "Suspensi Empuk & Senyap" },
      { label: "Fasilitas Audio", value: "Bluetooth / Touchscreen" },
    ],
  },
  {
    id: "innova-reborn",
    name: "Innova Reborn",
    startingPrice: "Rp 500.000",
    priceNum: 500000,
    lepasKunciPrice: "Rp 500.000 / hari",
    allInPrice: "Rp 750.000 / hari",
    category: "mobil",
    type: "Medium MPV Premium",
    capacity: "7 Orang",
    transmission: "Manual / Matic",
    fuel: "Diesel / Bensin",
    badge: "Standar Dinas Pemkot & BUMN",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Innova-Reborn.webp",
    specs: [
      { label: "Kapasitas Kursi", value: "7 Penumpang" },
      { label: "Tipe Mesin", value: "2.4 Diesel / 2.0 Bensin" },
      { label: "Pendingin Kabin", value: "Triple Blower Digital" },
      { label: "Kelas Penggunaan", value: "Dinas, Pejabat & Wisata" },
    ],
  },
  {
    id: "innova-zenix-hybrid",
    name: "Innova Zenix Hybrid",
    startingPrice: "Rp 650.000",
    priceNum: 650000,
    lepasKunciPrice: "Rp 650.000 / hari",
    allInPrice: "Rp 950.000 / hari",
    category: "mobil",
    type: "Luxury Crossover MPV",
    capacity: "7 Orang",
    transmission: "Matic e-CVT",
    fuel: "Hybrid Electric",
    badge: "Unit Pejabat & VIP",
    featured: true,
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/yREx2k0LGctmqV7goquDLFxzmB7DzuTupQNQWJzk.png",
    specs: [
      { label: "Kapasitas Kursi", value: "7 Penumpang" },
      { label: "Teknologi Mesin", value: "Hybrid EV Ultra Halus" },
      { label: "Interior", value: "Captain Seat / Kabin Mewah" },
      { label: "Konektivitas", value: "Apple CarPlay / Android Auto" },
    ],
  },
  {
    id: "hiace-premio",
    name: "Hiace Premio Luxury",
    startingPrice: "Rp 1.000.000",
    priceNum: 1000000,
    lepasKunciPrice: "Hubungi Admin",
    allInPrice: "Rp 1.300.000 / hari",
    category: "minibus",
    type: "Executive Minibus",
    capacity: "12 - 14 Orang",
    transmission: "Manual",
    fuel: "Diesel",
    badge: "Rombongan Dinas & Wisata",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Hiace-Premio-Luxury-1-min.png",
    specs: [
      { label: "Kapasitas Kursi", value: "12 - 14 Kursi Reclining" },
      { label: "Kabin", value: "Tinggi, Luas & Nyaman" },
      { label: "Pendingin", value: "Louver AC Tiap Baris" },
      { label: "Layanan", value: "Sopir Khusus Berpengalaman" },
    ],
  },
  {
    id: "honda-brio",
    name: "Honda Brio RS / E",
    startingPrice: "Rp 275.000",
    priceNum: 275000,
    lepasKunciPrice: "Rp 275.000 / hari",
    allInPrice: "Rp 450.000 / hari",
    category: "mobil",
    type: "City Car 5-Seater",
    capacity: "5 Orang",
    transmission: "Matic / Manual",
    fuel: "Bensin",
    badge: "Lincah & Hemat Parkir",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Screenshot-at-Dec-21-12-22-53-1-1.png",
    specs: [
      { label: "Kapasitas Kursi", value: "5 Penumpang" },
      { label: "Karakter", value: "Lincah di Dalam Kota Madiun" },
      { label: "Efisiensi BBM", value: "Sangat Irit" },
      { label: "Fitur", value: "Audio Touchscreen / AC Dingin" },
    ],
  },
  {
    id: "motor-vario-160",
    name: "Honda Vario 160 CBS/ABS",
    startingPrice: "Rp 90.000",
    priceNum: 90000,
    lepasKunciPrice: "Rp 90.000 / hari",
    allInPrice: "-",
    category: "motor",
    type: "Matic Sport 160cc",
    capacity: "2 Orang",
    transmission: "Matic",
    fuel: "Bensin",
    badge: "Antar Jemput Stasiun Madiun",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Kapasitas", value: "2 Orang" },
      { label: "Tenaga Mesin", value: "160cc Kuat Menanjak Sarangan" },
      { label: "Fasilitas Gratis", value: "2 Helm SNI Bersih + Jas Hujan" },
      { label: "Layanan Antar", value: "Siap Antar ke Pintu Stasiun Madiun" },
    ],
  },
  {
    id: "motor-beat",
    name: "Honda BeAT Street / CBS",
    startingPrice: "Rp 75.000",
    priceNum: 75000,
    lepasKunciPrice: "Rp 75.000 / hari",
    allInPrice: "-",
    category: "motor",
    type: "Matic Harian 110cc",
    capacity: "2 Orang",
    transmission: "Matic",
    fuel: "Bensin",
    badge: "Hemat Keliling Kota",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Kapasitas", value: "2 Orang" },
      { label: "Karakter", value: "Sangat Ringan & Irit" },
      { label: "Fasilitas Gratis", value: "2 Helm SNI Bersih + Jas Hujan" },
      { label: "Layanan Antar", value: "Siap Antar Garasi / Stasiun" },
    ],
  },
];

export function getWhatsAppBookingUrl(vehicleName: string = "", option: string = ""): string {
  const text = vehicleName
    ? `Halo Febri Trans, saya baru saja mengunjungi website dan ingin bertanya ketersediaan unit *${vehicleName}* ${
        option ? `(${option})` : ""
      }. Mohon info jadwal dan rincian tarifnya. Terima kasih!`
    : "Hallo Febri Trans, saya baru saja mengunjungi website, saya ingin bertanya ketersediaan armada rental mobil/motor di Madiun.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const REAL_PARTNER_LOGOS = [
  {
    name: "PEMERINTAH KOTA MADIUN",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/PEMKOT-MADIUN-e1765259698144-edited.png",
  },
  {
    name: "PT INKA (PERSERO)",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/INKA-1-edited-2.png",
  },
  {
    name: "DINAS PUPR",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/DINAS-PUPR-edited-e1765259721444.png",
  },
  {
    name: "BPJS KESEHATAN MADIUN",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/BPJS-MDN-edited-1.png",
  },
  {
    name: "BAPPEDA",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/BAPPEDA-1-edited.png",
  },
  {
    name: "KORPORASI & BUMN",
    imageUrl: "https://senatransport.co.id/wp-content/uploads/2025/12/Frame-7-2-edited-1.png",
  },
];

export const GOOGLE_REVIEWS_DATA = [
  {
    name: "Arief Pollo",
    role: "Local Guide",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWyWecsQ8y2hsBJWhV-PWwg7pKtgSUEfyxVNg05Lq33rU-zttA=w72-h72-p-rp-mo-ba3-br100",
    text: "Tempat ramah nyaman bersih dan ramah. Pelayanan cepat, mobil Innova sangat terawat dan wangi saat diantar ke Stasiun Madiun.",
    rating: 5,
  },
  {
    name: "Fery Andrian",
    role: "Local Guide",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocK8bJ1sJwF2wfcM-JMAmc8Lp5NDKDronQYxkZGaznC-0cJxBw=w72-h72-p-rp-mo-ba2-br100",
    text: "Pengalaman saya jakarta pp dan melayani tamu sepenuh hati. Driver sangat sopan, memahami etika formal dinas, dan hafal jalur cepat.",
    rating: 5,
  },
  {
    name: "Noor Hendra Tegar Saputra",
    role: "Local Guide",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCr4gvGyvvlih1ojGEF4xNLGjVVgu2gdpFIoQPdvBbv2SykrYS=w72-h72-p-rp-mo-br100",
    text: "Pelayanannya ramah dan juga drivernya sangat profesional. Proses administrasi untuk LPJ dinas sangat mudah dan transparan.",
    rating: 5,
  },
];
