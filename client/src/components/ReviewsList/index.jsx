import React from 'react';
import ReviewTiles from '../ReviewTiles';
import ReviewsAddForm from '../ReviewsAddForm';

import styles from './ReviewsList.css';

// Review List should display review tiles
// Review list will need an add review button that takes us to a form
const ReviewsList = () => (
  <div className={styles.reviewsList}>
    <ReviewTiles />
    <ReviewsAddForm />
  </div>
);

export default ReviewsList;
