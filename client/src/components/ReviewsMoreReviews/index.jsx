import React from 'react';
import styles from './ReviewsMoreReviews.css';

const ReviewsMoreReviews = (props) => {
  // eslint-disable-next-line react/prop-types
  const { openAddReviewModal, getMoreReviews } = props;
  return (
    <div className={styles.moreReviews}>
      <button onClick={openAddReviewModal} className={styles.modalAddButton} type="submit">Add Review</button>
      <button onClick={getMoreReviews} className={styles.moreButton} type="submit">More Reviews</button>
    </div>
  );
};

export default ReviewsMoreReviews;
