const calculateAverageRating = (ratings: number[]): number => {
  const validRatings = ratings.map((rating) =>
    Math.min(Math.max(rating, 0), 5)
  );

  const sum = validRatings.reduce((acc, rating) => acc + rating, 0);
  const average = validRatings.length > 0 ? sum / validRatings.length : 0;

  return parseFloat(average.toFixed(2));
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
