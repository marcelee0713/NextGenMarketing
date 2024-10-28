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
  "Region I",
  "Region II",
  "Region III",
  "Region IV-A",
  "Region IV-B",
  "Region V",
  "CAR",
  "NCR",
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
