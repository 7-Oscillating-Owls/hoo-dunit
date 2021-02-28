import React from 'react';
import styles from './ReviewsAddForm.css';

// Will need to have an onClick event listener and handler
const ReviewsAddForm = () => (
  <div className={styles.reviewsAddForm}>
    <button className={styles.addButton} type="submit">Add Review</button>
  </div>
);

export default ReviewsAddForm;
