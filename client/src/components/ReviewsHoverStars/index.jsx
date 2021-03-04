import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewsHoverStars.css';

const ReviewsHoverStars = (props) => (
  <div onChange={props.handleChange}>
    {
      [...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              className={styles.radio}
              type="radio"
              name="overallRating"
              value={ratingValue}
            />
            <FaStar
              className={styles.star}
              color={ratingValue <= (props.hoverRating || props.overallRating) ? "#404040" : "#E6E6E6"}
              size={50}
              onMouseEnter={() => props.starHover(ratingValue)}
              onMouseLeave={props.starNotHover}
            />
          </label>
        );
      })
    }
  </div>
);

export default ReviewsHoverStars;