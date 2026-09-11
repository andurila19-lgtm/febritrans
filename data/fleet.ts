export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: "mobil" | "motor";
  vehicleType: string;
  startingPrice: string;
  priceNum: number;
  capacity: string;
  transmission: string;
  fuelType: string;
  imageUrl: string;
  description: string;
  features: string[];
}

export const DISPLAY_PHONE = "0857-0415-5999";
export const WHATSAPP_NUMBER = "6285704155999";
export const LOCATION_ADDRESS = "Kelun, Kec. Kartoharjo, Kota Madiun, Jawa Timur";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cJbY3AfDVWTrxtFf8";
export const OPERATING_HOURS = "24 Jam Setiap Hari";

export const FLEET_DATA: Vehicle[] = [
  {
    id: "toyota-avanza",
    slug: "toyota-avanza",
    name: "Toyota Avanza",
    category: "mobil",
    vehicleType: "MPV Keluarga",
    startingPrice: "Rp 300.000",
    priceNum: 300000,
    capacity: "7 Penumpang",
    transmission: "Manual / Matic",
    fuelType: "Bensin",
    imageUrl: "/images/fleet/avanza.jpg",
    description:
      "Pilihan MPV andalan untuk perjalanan keluarga, dinas kerja, maupun wisata di Madiun dan kota sekitarnya dengan konsumsi bahan bakar yang efisien dan kabin lapang.",
    features: [
      "Kapasitas hingga 7 penumpang",
      "Pilihan transmisi Manual & Matic",
      "AC Double Blower dingin maksimal",
      "Kondisi mesin prima dan rutin diservis",
      "Kabin bersih dan terawat",
    ],
  },
  {
    id: "toyota-innova",
    slug: "toyota-innova",
    name: "Toyota Innova",
    category: "mobil",
    vehicleType: "Medium MPV",
    startingPrice: "Rp 500.000",
    priceNum: 500000,
    capacity: "7 Penumpang",
    transmission: "Manual / Matic",
    fuelType: "Bensin / Diesel",
    imageUrl: "/images/fleet/innova.jpg",
    description:
      "MPV premium dengan kenyamanan suspensi terbaik di kelasnya. Sangat cocok untuk perjalanan dinas, tamu kehormatan, rombongan keluarga, maupun perjalanan jarak jauh.",
    features: [
      "Kenyamanan suspensi superior",
      "Kabin lega dan senyap",
      "Kapasitas 7 penumpang dewasa",
      "AC Triple Blower hingga baris ketiga",
      "Unit bersih, wangi, dan terawat",
    ],
  },
  {
    id: "honda-brio",
    slug: "honda-brio",
    name: "Honda Brio",
    category: "mobil",
    vehicleType: "City Car Hatchback",
    startingPrice: "Rp 250.000",
    priceNum: 250000,
    capacity: "5 Penumpang",
    transmission: "Matic",
    fuelType: "Bensin",
    imageUrl: "/images/fleet/brio.jpg",
    description:
      "City car lincah, kompak, dan hemat bahan bakar. Pilihan tepat untuk mobilitas harian di dalam kota Madiun, kuliah, bekerja, atau berwisata santai.",
    features: [
      "Lincah untuk jalanan kota",
      "Transmisi Matic responsif & mudah dikendarai",
      "Sangat hemat bahan bakar",
      "AC dingin dan sistem audio optimal",
      "Mudah parkir di mana saja",
    ],
  },
  {
    id: "honda-calya",
    slug: "honda-calya",
    name: "Honda Calya",
    category: "mobil",
    vehicleType: "Compact MPV",
    startingPrice: "Rp 275.000",
    priceNum: 275000,
    capacity: "7 Penumpang",
    transmission: "Manual / Matic",
    fuelType: "Bensin",
    imageUrl: "/images/fleet/calya.jpg",
    description:
      "MPV kompak ekonomis yang mampu memuat hingga 7 orang. Solusi hemat untuk rombongan keluarga atau kegiatan operasional di sekitar Madiun.",
    features: [
      "Muat hingga 7 penumpang",
      "Biaya sewa sangat ekonomis",
      "Konsumsi bahan bakar irit",
      "Ruang bagasi fleksibel",
      "Unit bersih dan siap pakai",
    ],
  },
  {
    id: "honda-beat",
    slug: "honda-beat",
    name: "Honda Beat",
    category: "motor",
    vehicleType: "Matic Scooter",
    startingPrice: "Rp 75.000",
    priceNum: 75000,
    capacity: "2 Penumpang",
    transmission: "Matic",
    fuelType: "Bensin",
    imageUrl: "/images/fleet/beat.jpg",
    description:
      "Skuter matic terlaris yang ringan, lincah, dan sangat irit bensin. Sangat praktis untuk menjelajahi Kota Madiun tanpa takut macet atau sulit parkir.",
    features: [
      "Ringan dan gesit di perkotaan",
      "Konsumsi BBM sangat irit",
      "Termasuk fasilitas 2 helm bersih",
      "Dilengkapi jas hujan berkualitas",
      "Kondisi ban dan rem terawat",
    ],
  },
  {
    id: "honda-vario",
    slug: "honda-vario",
    name: "Honda Vario",
    category: "motor",
    vehicleType: "Matic Scooter",
    startingPrice: "Rp 100.000",
    priceNum: 100000,
    capacity: "2 Penumpang",
    transmission: "Matic",
    fuelType: "Bensin",
    imageUrl: "/images/fleet/vario.jpg",
    description:
      "Motor matic dengan bodi lebih kokoh, bagasi luas, dan mesin bertenaga. Sangat nyaman untuk perjalanan dalam kota maupun rute pinggiran Madiun.",
    features: [
      "Bagasi luas untuk menyimpan barang",
      "Tenaga responsif dan stabil",
      "Termasuk fasilitas 2 helm",
      "Dilengkapi jas hujan",
      "Pengereman aman dan nyaman",
    ],
  },
];

export function getWhatsAppBookingUrl(vehicleName: string = "", customNote: string = ""): string {
  let text = "Halo Febri Trans, saya ingin menanyakan informasi ketersediaan kendaraan.";
  if (vehicleName) {
    text = `Halo Febri Trans, saya ingin sewa ${vehicleName}. Apakah unit tersedia?`;
  }
  if (customNote) {
    text += ` ${customNote}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return FLEET_DATA.find((v) => v.slug === slug);
}

export function getRelatedVehicles(currentSlug: string, limit: number = 3): Vehicle[] {
  return FLEET_DATA.filter((v) => v.slug !== currentSlug).slice(0, limit);
}

export const GOOGLE_REVIEWS_DATA = [
  {
    name: "Arief Pollo",
    role: "Local Guide",
    text: "Tempat ramah nyaman bersih dan ramah. Pelayanan cepat.",
    rating: 5,
  },
  {
    name: "Fery Andrian",
    role: "Local Guide",
    text: "Pengalaman saya jakarta pp dan melayani tamu sepenuh hati.",
    rating: 5,
  },
  {
    name: "Noor Hendra Tegar Saputra",
    role: "Local Guide",
    text: "Pelayanannya ramah dan juga drivernya sangat profesional.",
    rating: 5,
  },
];
