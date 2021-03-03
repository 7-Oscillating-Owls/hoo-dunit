import React from 'react';
import styles from './ReviewRatingDistribution.css';

const ReviewRatingDistribution = (props) => {
  const {
    reviewCount,
    fiveStarTotal,
    fourStarTotal,
    threeStarTotal,
    twoStarTotal,
    oneStarTotal
  } = props;

  return (
    <div className={styles.ratingDistribution}>
      <div>Star Distribution:</div>
      <br />
      <div>5 Stars: {`${(fiveStarTotal / reviewCount).toFixed(2) * 100}%`}</div>
      <div>4 Stars: {`${(fourStarTotal / reviewCount).toFixed(2) * 100}%`}</div>
      <div>3 Stars: {`${(threeStarTotal / reviewCount).toFixed(2) * 100}%`}</div>
      <div>2 Stars: {`${(twoStarTotal / reviewCount).toFixed(2) * 100}%`}</div>
      <div>1 Star: {`${(oneStarTotal / reviewCount).toFixed(2) * 100}%`}</div>
    </div>
  );
};

export default ReviewRatingDistribution;

// Notes and Experimentation:

