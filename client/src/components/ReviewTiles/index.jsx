import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import styles from './ReviewTiles.css';

const ReviewTiles = ({ review }) => {
  const {
    rating, reviewer_name, date, summary, body, helpfulness,
  } = review;
  const monthOptions = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
  const monthNumber = new Date(date).getMonth();
  const month = monthOptions[monthNumber];
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <div className={styles.reviewTiles}>
      {/* <div>{rating}</div> */}
      <div>
        {
          [...Array(5)].map((star, index) => <FaStar size={10} key={index} />)
        }
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
