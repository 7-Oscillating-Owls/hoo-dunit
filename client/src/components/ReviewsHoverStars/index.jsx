import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewsHoverStars.css';

const ReviewsHoverStars = (props) => {
  const {
    handleChange,
    hoverRating,
    overallRating,
    starHover,
    starNotHover,
  } = props;
  return (
    <div onChange={handleChange}>
      {
        [...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label className={styles.radioStar}>
              <input
                className={styles.radio}
                type="radio"
                name="overallRating"
                value={ratingValue}
                key={`HoverStar${(Math.random() * 20)}`}
              />
              <FaStar
                className={styles.star}
                color={ratingValue <= (hoverRating || overallRating) ? '#404040' : '#E6E6E6'}
                size={50}
                onMouseEnter={() => starHover(ratingValue)}
                onMouseLeave={starNotHover}
              />
            </label>
          );
        })
      }
    </div>
  );
};

export default ReviewsHoverStars;
