import { OrdersByProvince } from "@/interfaces/user/user.product.interface";

// Fisher-Yates shuffle to randomize the array
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const provinces: string[] = [
  "Ilocos Norte",
  "Ilocos Sur",
  "La Union",
  "Pangasinan",
  "Batanes",
  "Cagayan",
  "Isabela",
  "Nueva Vizcaya",
  "Quirino",
  "Aurora",
  "Bataan",
  "Bulacan",
  "Nueva Ecija",
  "Pampanga",
  "Tarlac",
  "Zambales",
  "Batangas",
  "Cavite",
  "Laguna",
  "Quezon",
  "Rizal",
  "Marinduque",
  "Occidental Mindoro",
  "Oriental Mindoro",
  "Palawan",
  "Romblon",
  "Albay",
  "Camarines Norte",
  "Camarines Sur",
  "Catanduanes",
  "Masbate",
  "Sorsogon",
  "Abra",
  "Apayao",
  "Benguet",
  "Ifugao",
  "Kalinga",
  "Mountain Province",
  "Aklan",
  "Antique",
  "Capiz",
  "Guimaras",
  "Iloilo",
  "Negros Occidental",
  "Bohol",
  "Cebu",
  "Negros Oriental",
  "Siquijor",
  "Biliran",
  "Eastern Samar",
  "Leyte",
  "Northern Samar",
  "Samar",
  "Southern Leyte",
  "Zamboanga del Norte",
  "Zamboanga del Sur",
  "Zamboanga Sibugay",
  "Bukidnon",
  "Camiguin",
  "Lanao del Norte",
  "Misamis Occidental",
  "Misamis Oriental",
  "Davao de Oro",
  "Davao del Norte",
  "Davao del Sur",
  "Davao Occidental",
  "Davao Oriental",
  "Cotabato",
  "Sarangani",
  "South Cotabato",
  "Sultan Kudarat",
  "Agusan del Norte",
  "Agusan del Sur",
  "Dinagat Islands",
  "Surigao del Norte",
  "Surigao del Sur",
  "Basilan",
  "Lanao del Sur",
  "Maguindanao del Norte",
  "Maguindanao del Sur",
  "Sulu",
  "Tawi-Tawi",
];

const generateRandomOrdersByProvince = (
  min: number,
  max: number
): OrdersByProvince[] => {
  // Shuffle the provinces and limit to 8 or 10 unique provinces
  const shuffledProvinces = shuffleArray(provinces);
  const numberOfProvinces = Math.random() < 0.5 ? 8 : 10; // Randomly choose between 8 or 10

  // Generate the random orders for the selected provinces
  return shuffledProvinces.slice(0, numberOfProvinces).map((province) => ({
    province: province,
    amountOfSales: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

export { generateRandomOrdersByProvince };
