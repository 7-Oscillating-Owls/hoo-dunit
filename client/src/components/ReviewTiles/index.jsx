import React from 'react';
import ReviewTileStars from '../ReviewTileStars';
import ReviewTileDate from '../ReviewTileDate';
import styles from './ReviewTiles.css';

class ReviewTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewId: this.props.review.review_id,
      helpful: this.props.review.helpfulness,
    };
    this.handleYesClick = this.handleYesClick.bind(this);
  }

  handleYesClick(event) {
    const { handleHelpfulnessClick } = this.props;
    handleHelpfulnessClick(event, this.state.reviewId);
    this.setState({ helpful: (this.state.helpful + 1) });
  }

  render() {
    const {
      review,
    } = this.props;
    const { helpful } = this.state;
    const {
      rating,
      reviewer_name,
      date,
      summary,
      body,
      helpfulness,
    } = review;
    return (
      <div className={styles.reviewTiles}>
        <div className={styles.tileHeader}>
          <ReviewTileStars ratings={rating} />
          <span className={styles.nameAndDate}>
            {` ${reviewer_name} | `}
            <ReviewTileDate date={date} />
          </span>
        </div>
        <div className={styles.tileSummary}>{summary}</div>
        <div className={styles.tileBody}>{body}</div>
        <div>
          Helpful?
          {' '}
          <span
            className={styles.helped}
            onClick={this.handleYesClick}
          >
            Yes
          </span>
          {' '}
          (
          {helpful}
          )
        </div>
      </div>
    );
  }
}

export default ReviewTiles;
