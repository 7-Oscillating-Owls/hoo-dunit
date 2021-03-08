/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './ReviewsAverageOverviewStars.css';
// import images from '/static/images';

const ReviewsAverageOverviewStars = (props) => {
  const starRating = props.starRating;
  const solidStars = Math.floor(starRating);
  let starDifference = starRating - solidStars;
  let partialStars;
  let starRender;
  const remainingStars = 4 - solidStars;
  if (starRating === 5 || starRating === 0) {
    partialStars = null;
    starDifference = 0;
  } else if (starDifference > 0 && starDifference <= 0.12) {
    // Unfilled star
    partialStars = <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" />;
  } else if (starDifference > 0.12 && starDifference <= 0.37) {
    // Quarter filled star
    partialStars = <img src="/images/QuarterStar.png" className={styles.stars} alt="Quarter Filled Star" />;
  } else if (starDifference > 0.37 && starDifference <= 0.62) {
    // Half filled star
    partialStars = <img src="/images/HalfStar.png" className={styles.stars} alt="Half Filled Star" />;
  } else if (starDifference > 0.62 && starDifference <= 0.87) {
    // 3/4 filled star
    partialStars = <img src="/images/ThreeQuarterStar.png" className={styles.stars} alt="Three Quarters Filled Star" />;
  } else if (starDifference > 0.87 && starDifference < 1) {
    // Solid star
    partialStars = <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" />;
  } else {
    // Unfilled star
    partialStars = <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" />;
  }

  if (starRating === 5) {
    starRender = (
      [...Array(5)].map((star, index) => <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" key={`Solid Star: ${index} ${star}`} />)
    );
  } else if (starRating === 0) {
    starRender = (
      [...Array(5)].map((star, index) => <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" key={`Unfilled Star: ${index} ${star}`} />)
    );
  } else {
    starRender = (
      <div>
        {
          [...Array(solidStars)].map((star, index) => <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" key={`Solid Star: ${index} ${star}`} />)
        }
        {partialStars}
        {
          [...Array(remainingStars)].map((star, index) => <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" key={`Unfilled Star: ${index} ${star}`} />)
        }
      </div>
    );
  }

  return (
    <div>
      {starRender}
    </div>
  );
};

export default ReviewsAverageOverviewStars;
