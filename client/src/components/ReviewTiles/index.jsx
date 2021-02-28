import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewTiles.css';

const ReviewTiles = ({ review }) => {
  const {
    rating, reviewer_name, date, summary, body, helpfulness,
  } = review;
  return (
    <div className={styles.reviewTiles}>
      {/* <div>{rating}</div> */}
      <div>
        {
          [...Array(5)].map((star) => <FaStar size={10} />)
        }
      </div>
      <div>{reviewer_name}</div>
      <div>{date}</div>
      <div>{summary}</div>
      <div>{body}</div>
      <div>
        Helpfulness? Yes (
        {helpfulness}
        )
      </div>
      <div> | </div>
      <div>Report</div>
    </div>
  );
};

ReviewTiles.propTypes = { review: PropTypes.objectOf().isRequired };
export default ReviewTiles;
