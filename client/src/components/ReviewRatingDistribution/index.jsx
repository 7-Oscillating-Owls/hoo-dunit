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
  const fiveStarDistribution = (fiveStarTotal / reviewCount).toFixed(2) * 100;
  const fourStarDistribution = (fourStarTotal / reviewCount).toFixed(2) * 100;
  const threeStarDistribution = (threeStarTotal / reviewCount).toFixed(2) * 100;
  const twoStarDistribution = (twoStarTotal / reviewCount).toFixed(2) * 100;
  const oneStarDistribution = (oneStarTotal / reviewCount).toFixed(2) * 100;
  return (
    <div className={styles.ratingDistribution}>
      <div className={styles.distributionWrapper}>
        <label htmlFor="fiveStar">5 Stars: </label>
        <progress id="fiveStar" max="100" value={fiveStarDistribution || ''}>{`${fiveStarDistribution}%`}</progress>
        <span>
          {' '}
          {fiveStarTotal}
        </span>
      </div>
      <div className={styles.distributionWrapper}>
        <label htmlFor="fourStar">4 Stars: </label>
        <progress id="fourStar" max="100" value={fourStarDistribution || ''}>{`${fourStarDistribution}%`}</progress>
        <span>
          {' '}
          {fourStarTotal}
        </span>
      </div>
      <div className={styles.distributionWrapper}>
        <label htmlFor="threeStar">3 Stars: </label>
        <progress id="threeStar" max="100" value={threeStarDistribution || ''}>{`${threeStarDistribution}%`}</progress>
        <span>
          {' '}
          {threeStarTotal}
        </span>
      </div>
      <div className={styles.distributionWrapper}>
        <label htmlFor="twoStar">2 Stars: </label>
        <progress id="twoStar" max="100" value={twoStarDistribution || ''}>{`${twoStarDistribution}%`}</progress>
        <span>
          {' '}
          {twoStarTotal}
        </span>
      </div>
      <div className={styles.distributionWrapper}>
        <label htmlFor="oneStar">1 Stars: </label>
        <progress id="oneStar" max="100" value={oneStarDistribution || ''}>{`${oneStarDistribution}%`}</progress>
        <span>
          {' '}
          {oneStarTotal}
        </span>
      </div>
    </div>
  );
};

export default ReviewRatingDistribution;
