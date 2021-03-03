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
      <div>
        <span className={styles.xButton} onClick={this.props.closeAddReviewModal}>x</span>
        <div className={styles.modalWrapper} style={{opacity: this.props.displayModal ? '1' : '0'}} >
          <ReviewsAddForm className={styles.modalContent} addReview={this.props.addReview} />
        </div>
        <button className={styles.closeModalButton} onClick={this.props.closeAddReviewModal}>Cancel</button>
      </div>
    );
  }
}

export default ReviewAddFormModal;
