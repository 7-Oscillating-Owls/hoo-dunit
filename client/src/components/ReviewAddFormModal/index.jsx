import React from 'react';
import ReviewsAddForm from '../ReviewsAddForm';
import styles from './ReviewAddFormModal.css';

class ReviewAddFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // displayModal: false
    };
  }

  render() {
    return (
      <div className={styles.modalWrapper} style={{opacity: this.props.displayModal ? '1' : '0'}} >
        <div>
          <span className={styles.closeModalButton} onClick={this.props.closeAddReviewModal}>x</span>
        </div>
        <div className={styles.modalContent}>
          <ReviewsAddForm addReview={this.props.addReview} />
        </div>
      </div>
    );
  }
}

export default ReviewAddFormModal;
