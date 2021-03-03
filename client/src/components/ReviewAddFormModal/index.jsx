import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import { FaTimesCircle } from 'react-icons/fa'
import styles from './ReviewAddFormModal.css';

const ReviewAddFormModal = (props) => (
  <div>
    <FaTimesCircle className={styles.closeModalButton} onClick={props.closeAddReviewModal} />
    <div className={styles.modalWrapper} style={{ opacity: props.displayModal ? '1' : '0' }}>
      <ReviewsAddForm className={styles.modalContent} addReview={props.addReview} />
    </div>
    <button type="button" className={styles.closeModalButton} onClick={props.closeAddReviewModal}>Cancel</button>
  </div>
);

export default ReviewAddFormModal;
