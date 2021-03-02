import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
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
      overallRating: 5,
      recommendPercent: 0,
    };
    this.getOverallView = this.getOverallView.bind(this);
  }

  componentDidMount() {
    this.getOverallView();
  }

  getOverallView() {
    let ratingTotal = 0;
    let recommendTotal = 0;
    // const recommended = `${(recommendTotal / (this.state.reviewCount)) * 100}%`;
    reviewsData.results.forEach((review) => {
      ratingTotal += review.rating;
      if (review.recommend === true) {
        recommendTotal += 1;
      }
    });
    const averageRating = ratingTotal / (this.state.reviewCount);
    const recommended = `${((recommendTotal / 4).toFixed(2)) * 100}%`;
    this.setState({ overallRating: averageRating, recommendPercent: recommended });
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
        <div className={styles.recommendOverview}>{this.state.recommendPercent} of reviewers recommend this product</div>
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
