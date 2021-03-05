import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import { FaTimesCircle } from 'react-icons/fa';
import styles from './ReviewAddFormModal.css';

const ReviewAddFormModal = (props) => (
  <div className={styles.modal}>
    <div>
      <FaTimesCircle className={styles.timesCircleClose} onClick={props.closeAddReviewModal} />
      <ReviewsAddForm
        className={styles.modalContent}
        addReview={props.addReview}
        closeModalButton={props.closeModalButton}
      />
      <button type="button" className={styles.closeModalButton} onClick={props.closeAddReviewModal}>Cancel</button>
    </div>
  </div>
);

export default ReviewAddFormModal;
