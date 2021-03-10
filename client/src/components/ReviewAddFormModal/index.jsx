/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import { GrClose } from 'react-icons/gr';
import styles from './ReviewAddFormModal.css';

const ReviewAddFormModal = (props) => {
  const {
    addReview,
    closeModalButton,
    closeAddReviewModal,
    characteristicNames,
    characteristicIds,
  } = props;
  return (
  <div className={styles.modal}>
    <div>
      <GrClose className={styles.GrClose} onClick={closeAddReviewModal} />
      <ReviewsAddForm
        className={styles.modalContent}
        addReview={addReview}
        closeModalButton={closeModalButton}
        closeAddReviewModal={closeAddReviewModal}
        characteristicNames={characteristicNames}
        characteristicIds={characteristicIds}
      />
    </div>
  </div>
  );
};

export default ReviewAddFormModal;
