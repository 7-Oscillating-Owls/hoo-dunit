import React from 'react';
import styles from './ReviewsMoreReviews.css';

const ReviewsMoreReviews = (props) => {
  const {
    openAddReviewModal,
    getMoreReviews,
    displayMoreButton
  } = props;
  let moreReviewButton;
  if (displayMoreButton === true) {
    moreReviewButton = <button onClick={getMoreReviews} className={styles.moreButton} type="submit">More Reviews</button>;
  } else {
    moreReviewButton = null;
  }
  return (
    <div className={styles.moreReviews}>
      <button onClick={openAddReviewModal} className={styles.modalAddButton} type="submit">Add Review</button>
      {moreReviewButton}
    </div>
  );
};

export default ReviewsMoreReviews;
