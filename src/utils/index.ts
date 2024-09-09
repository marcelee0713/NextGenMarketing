export const calculateAverageRating = (ratings: number[]): number => {
  const validRatings = ratings.map((rating) =>
    Math.min(Math.max(rating, 0), 5)
  );

  const sum = validRatings.reduce((acc, rating) => acc + rating, 0);
  const average = validRatings.length > 0 ? sum / validRatings.length : 0;

  return parseFloat(average.toFixed(2));
};
