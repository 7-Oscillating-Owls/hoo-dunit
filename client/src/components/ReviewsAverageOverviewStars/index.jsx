import React from 'react';
import styles from './ReviewsAverageOverviewStars.css';

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
      [...Array(5)].map(() => <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" key={`SolidStar${(Math.random() * 20)}`} />)
    );
  } else if (starRating === 0) {
    starRender = (
      [...Array(5)].map(() => <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" key={`UnfilledStar${(Math.random() * 20)}`} />)
    );
  } else {
    starRender = (
      <div>
        {
          [...Array(solidStars)].map(() => <img src="/images/FilledStar.png" className={styles.stars} alt="Solid Star" key={`SolidStar${(Math.random() * 20)}`} />)
        }
        {partialStars}
        {
          [...Array(remainingStars)].map(() => <img src="/images/UnfilledStar.png" className={styles.stars} alt="Unfilled Star" key={`UnfilledStar${(Math.random() * 20)}`} />)
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
