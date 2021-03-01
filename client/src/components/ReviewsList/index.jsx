import React from 'react';
import ReviewTiles from '../ReviewTiles';
import ReviewsAddForm from '../ReviewsAddForm';
import ReviewsMoreReviews from '../ReviewsMoreReviews';
import reviewsData from '../../../../data/reviews';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      reviewCount: reviewsData.results.length,
      overallRating: 5,
    };
    this.getOverallRating = this.getOverallRating.bind(this);
  }

  componentDidMount() {
    this.getOverallRating();
  }

  getOverallRating() {
    let ratingTotal = 0;
    reviewsData.results.forEach((review) => {
      ratingTotal += review.rating;
    });
    const averageRating = ratingTotal / (this.state.reviewCount);
    this.setState({ overallRating: averageRating });
  }

  render() {
    return (
      <div className={styles.reviewsList}>
        <h3 className={styles.ratingsAndReviewsTitle}>Reviews and Ratings</h3>
        <div className={styles.overallRating}>{this.state.overallRating}</div>
        <div className={styles.starRating}>
          {
            [...Array(2)].map((star, index) => <FaStar size={30} key={index} />)
          }
          <FaStarHalfAlt size={30} />
          {
            [...Array(2)].map((star, index) => <FaRegStar size={30} key={index} />)
          }
        </div>
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
