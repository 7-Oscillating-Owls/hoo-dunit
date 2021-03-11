export const getAverageRating = ({ ratings = {} }) => {
  let totalStars = 0;
  let totalReviews = 0;

  Object.keys(ratings).forEach((key) => {
    totalStars += Number(key * ratings[key]);
    totalReviews += Number(ratings[key]);
  });

  const starRating = totalReviews > 0 ? (totalStars / totalReviews).toFixed(1) : '0.0';

  return {
    starRating,
    fiveStarTotal: ratings['5'] || 0,
    fourStarTotal: ratings['4'] || 0,
    threeStarTotal: ratings['3'] || 0,
    twoStarTotal: ratings['2'] || 0,
    oneStarTotal: ratings['1'] || 0,
    zeroStarTotal: ratings['0'] || 0,
  };
};

export const getRecommendPercent = ({ recommended = {} }) => {
  const yesVotes = Number(recommended.true) || 0;
  const noVotes = Number(recommended.false) || 0;
  const totalVotes = yesVotes + noVotes;
  let percent = '0';

  if (totalVotes !== 0) {
    percent = Math.round((recommended.true / totalVotes) * 100).toString();
  }

  return {
    recommendPercent: percent,
    totalNumberOfStars: totalVotes,
  };
};

const ReviewUtils = {
  getAverageRating,
  getRecommendPercent,
};

export default ReviewUtils;
