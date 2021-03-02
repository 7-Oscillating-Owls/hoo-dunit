import React from 'react';
import PropTypes from 'prop-types';
import ReviewTileStars from '../ReviewTileStars';
import styles from './ReviewTiles.css';

const ReviewTiles = ({ review }) => {
  const { rating, reviewer_name, date, summary, body, helpfulness } = review;
  const monthOptions = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
  const newDate = new Date(date);
  const monthNumber = newDate.getMonth();
  const month = monthOptions[monthNumber];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <div className={styles.reviewTiles}>
      <div>
        <ReviewTileStars ratings={rating} />
      </div>
      <div>{reviewer_name}</div>
      <div>{formattedDate}</div>
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
