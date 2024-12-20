const calculateAverageRating = (ratings: number[]): number => {
  const validRatings = ratings.map((rating) =>
    Math.min(Math.max(rating, 0), 5)
  );

  const sum = validRatings.reduce((acc, rating) => acc + rating, 0);
  const average = validRatings.length > 0 ? sum / validRatings.length : 0;

  return parseFloat(average.toFixed(2));
};

export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(); // Current timestamp
  const randomNum = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
  return `${timestamp}${randomNum}`;
};

const skipArr = <T>(arr: T[], n: number): T[] => {
  if (n < 0) {
    return arr;
  }
  return arr.slice(n);
};

const takeArr = <T>(arr: T[], m: number): T[] => {
  if (m < 0) {
    return arr;
  }
  return arr.slice(0, m);
};

const skipAndTake = <T>(
  arr: T[],
  skipCount?: number,
  takeCount?: number
): T[] => {
  if (skipCount && takeCount) {
    const skipped = skipArr(arr, skipCount);
    return takeArr(skipped, takeCount);
  } else if (!skipCount && takeCount) {
    return takeArr(arr, takeCount);
  } else if (skipCount && !takeCount) {
    return skipArr(arr, skipCount);
  } else {
    return arr;
  }
};

const formatToCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export {
  skipArr,
  takeArr,
  skipAndTake,
  calculateAverageRating,
  formatToCurrency,
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random integer between min and max (inclusive)
};

export const generateRandomId = (length: number = 10): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

export const generateRandomMixedIds = (
  minCount: number,
  maxCount: number,
  minRange: number,
  maxRange: number
): string[] => {
  const ids = new Set<string>(); // Use a Set to ensure uniqueness
  const count = getRandomInt(minCount, maxCount); // Random count of IDs to generate
  const range = getRandomInt(minRange, maxRange); // Random range for the numeric part

  const prefixes: string[] = ["userId", "partnerId"]; // Array of prefixes

  while (ids.size < count) {
    const randomNumber = getRandomInt(1, range); // Generate a random number based on the selected range
    const randomPrefix = prefixes[getRandomInt(0, prefixes.length - 1)]; // Randomly select a prefix
    const id = `${randomPrefix}${randomNumber}`;
    ids.add(id); // Add to the set to ensure uniqueness
  }

  return Array.from(ids); // Convert Set back to Array
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getColorForRating = (rating: number): string => {
  if (rating >= 4) {
    return "#008000"; // Green
  } else if (rating >= 3 && rating < 4) {
    return "#9ACD32"; // Yellow Green (more green)
  } else if (rating >= 2 && rating < 3) {
    return "#FFD700"; // Yellow
  } else if (rating >= 1 && rating < 2) {
    return "#FFA500"; // Orange
  } else {
    return "#FF0000"; // Red
  }
};
