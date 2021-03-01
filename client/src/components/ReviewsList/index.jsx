import React from 'react';
import ReviewTiles from '../ReviewTiles';
import ReviewsAddForm from '../ReviewsAddForm';
import ReviewsMoreReviews from '../ReviewsMoreReviews';
import reviewsData from '../../../../data/reviews';
import styles from './ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      reviewCount: reviewsData.results.length,
    };
  }

  render() {
    return (
      <div className={styles.reviewsList}>
        <h3 className={styles.ratingsAndReviewsTitle}>Reviews and Ratings</h3>
        <div className={styles.starRating}>5</div>
        <div className={styles.recommendOverview}>100% of reviewers recommend this product</div>
        <div className={styles.totalReviews}>{this.state.reviewCount} Reviews</div>
        <div>
          {
            // eslint-disable-next-line array-callback-return
            reviewsData.results.map((review) => (
              <ReviewTiles review={review} key={review.review_id} />
            ))
          }
        </div>
        <ReviewsAddForm />
        <ReviewsMoreReviews />
      </div>
    );
  }
}

export default ReviewsList;
