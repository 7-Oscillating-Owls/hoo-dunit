import React from 'react';
import PropTypes from 'prop-types';
import ReviewTileStars from '../ReviewTileStars';
import ReviewTileDate from '../ReviewTileDate';
import styles from './ReviewTiles.css';

const ReviewTiles = ({ review }) => {
  const { rating, reviewer_name, date, summary, body, helpfulness } = review;
  return (
    <div className={styles.reviewTiles}>
      <div className={styles.tileHeader}>
        <ReviewTileStars className={styles.starRating} ratings={rating} />
        <span className={styles.nameAndDate}>
          {` ${reviewer_name} | `}
          <ReviewTileDate date={date} />
        </span>
      </div>
      <div className={styles.tileSummary}>{summary}</div>
      <div className={styles.tileBody}>{body}</div>
      <div>
        Helpfulness? Yes (
        {helpfulness}
        ) | Report
      </div>
    </div>
  );
};

// Taking out propTypes for now
// ReviewTiles.propTypes = { review: PropTypes.objectOf().isRequired };
export default ReviewTiles;
