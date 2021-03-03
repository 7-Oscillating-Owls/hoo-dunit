import React from 'react';
import styles from './ReviewRatingDistribution.css';

const ReviewRatingDistribution = (props) => {
  const { fiveStarTotal, fourStarTotal, threeStarTotal, twoStarTotal, oneStarTotal } = props;
  const total = fiveStarTotal + fourStarTotal + threeStarTotal + twoStarTotal + oneStarTotal - 5;
  return (
    <div className={styles.ratingDistribution}>
      <div>Star Distribution:</div>
      <br />
      <div>5 Stars: {`${(fiveStarTotal - 1 / total).toFixed(2) * 100}%`}</div>
      <div>4 Stars: {`${(fourStarTotal - 1 / total).toFixed(2) * 100}%`}</div>
      <div>3 Stars: {`${(threeStarTotal - 1 / total).toFixed(2) * 100}%`}</div>
      <div>2 Stars: {`${(twoStarTotal - 1 / total).toFixed(2) * 100}%`}</div>
      <div>1 Star: {`${(oneStarTotal - 1 / total).toFixed(2) * 100}%`}</div>
    </div>
  );
};

export default ReviewRatingDistribution;
