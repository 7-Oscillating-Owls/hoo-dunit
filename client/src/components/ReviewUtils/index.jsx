export const getAverageRating = ({ ratings }) => {
  let totalStars = 0;
  let totalReviews = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 6; i++) {
    if (ratings[i]) {
      totalStars += Number(i * ratings[i]);
      totalReviews += Number(ratings[i]);
    }
  }

  const starRating = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : 0;

  return {
    starRating,
    fiveStarTotal: ratings['5'],
    fourStarTotal: ratings['4'],
    threeStarTotal: ratings['3'],
    twoStarTotal: ratings['2'],
    oneStarTotal: ratings['1'],
  };
};

export const getRecommendPercent = ({ recommended }) => {
  const totalStars = Number(recommended.true) + Number(recommended.false);
  const recommendedPercentage = ((recommended.true / totalStars) * 100).toFixed(2);
  return {
    recommendPercent: recommendedPercentage,
    totalNumberOfStars: totalStars,
  };
};

const ReviewUtils = {
  getAverageRating,
  getRecommendPercent,
};

export default ReviewUtils;
