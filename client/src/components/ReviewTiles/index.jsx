import React from 'react';
import PropTypes from 'prop-types';
import ReviewTileStars from '../ReviewTileStars';
import ReviewTileDate from '../ReviewTileDate';
import styles from './ReviewTiles.css';

const ReviewTiles = ({ review }) => {
  const { rating, reviewer_name, date, summary, body, helpfulness } = review;
  return (
    <div className={styles.reviewTiles}>
      <div>
        <ReviewTileStars ratings={rating} />
      </div>
      <div>{reviewer_name}</div>
      <div>
        <ReviewTileDate date={date} />
      </div>
      <div>{summary}</div>
      <div>{body}</div>
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
