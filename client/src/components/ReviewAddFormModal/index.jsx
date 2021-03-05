import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import { FaTimesCircle } from 'react-icons/fa';
import styles from './ReviewAddFormModal.css';

const ReviewAddFormModal = (props) => (
  <div>
    <div className={styles.modalWrapper} style={{ opacity: props.displayModal ? '1' : '0' }}>
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
