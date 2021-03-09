import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import { GrClose } from 'react-icons/gr';
import styles from './ReviewAddFormModal.css';

const ReviewAddFormModal = (props) => (
  <div className={styles.modal}>
    <div>
      <GrClose className={styles.GrClose} onClick={props.closeAddReviewModal} />
      <ReviewsAddForm
        className={styles.modalContent}
        addReview={props.addReview}
        closeModalButton={props.closeModalButton}
        closeAddReviewModal={props.closeAddReviewModal}
      />
    </div>
  </div>
);

export default ReviewAddFormModal;
