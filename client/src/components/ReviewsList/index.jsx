import React from 'react';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import ReviewRatingDistribution from '../ReviewRatingDistribution';
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
      overallRating: 0,
      recommendPercent: 0,
      fiveStarTotal: 0,
      fourStarTotal: 0,
      threeStarTotal: 0,
      twoStarTotal: 0,
      oneStarTotal: 0,
    };
    this.getReviews = this.getReviews.bind(this);
    this.getOverallView = this.getOverallView.bind(this);
    this.addReview = this.addReview.bind(this);
    this.getIndividualStarTotal = this.getIndividualStarTotal.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getOverallView();
  }

  getReviews() {
    this.setState({ reviewsList: reviewsData.results });
    this.setState({ reviewCount: reviewsData.results.length });
  }

  getOverallView() {
    let ratingTotal = 0;
    let recommendTotal = 0;
    reviewsData.results.forEach((review) => {
      ratingTotal += review.rating;
      if (review.recommend === true) {
        recommendTotal += 1;
      }
    });
    const averageRating = ratingTotal / (this.state.reviewCount);
    const recommended = `${((recommendTotal / (this.state.reviewCount)).toFixed(2)) * 100}%`;
    this.setState({ overallRating: averageRating, recommendPercent: recommended });
  }

  getIndividualStarTotal() {
    const fiveStarCount = 1;
    const fourStarCount = 1;
    const threeStarCount = 1;
    const twoStarCount = 1;
    const oneStarCount = 1;

    reviewsData.results.forEach((review, index) => {
      const individualStarRating = reviewsData.results[index]['rating'];
      if (individualStarRating === 5) {
        fiveStarCount += 1;
      }
      if (individualStarRating === 4) {
        fourStarCount += 1;
      }
      if (individualStarRating === 3) {
        threeStarCount += 1;
      }
      if (individualStarRating === 2) {
        twoStarCount += 1;
      }
      if (individualStarRating === 1) {
        oneStarCount += 1;
      }
    });
    this.setState({ fiveStarTotal: fiveStarCount });
    this.setState({ fourStarTotal: fourStarCount });
    this.setState({ threeStarTotal: threeStarCount });
    this.setState({ twoStarTotal: twoStarCount });
    this.setState({ oneStarTotal: fiveStarCount });
  }

  // eslint-disable-next-line class-methods-use-this
  addReview(formData) {
    const reviewObject = {
      rating: formData.overallRating,
      summary: formData.reviewSummary,
      recommend: formData.recommend,
      body: formData.reviewBody,
      reviewer_name: formData.reviewUsername,
      photos: formData.uploadedFile,
    };
    // Will need to change this to post request once connected to server - to POST/reviews
    reviewsData.push(reviewObject);
    const reviewMetaCharacteristicsObject = {
      Size: {
        value: formData.size,
      },
      Width: {
        value: formData.width,
      },
      Comfort: {
        value: formData.comfort,
      },
    };
    // Will need to change this to post request to POST/reviews/meta
    console.log('Review Added!');
  }

  render() {
    return (
      <div className={styles.reviewsList}>
        <h3 className={styles.ratingsAndReviewsTitle}>Reviews and Ratings</h3>
        <div className={styles.overallRating}>{this.state.overallRating}</div>
        <div className={styles.starRating}>
          <ReviewsAverageOverviewStars ratings={this.state.overallRating} />
        </div>
        <div className={styles.recommendOverview}>{this.state.recommendPercent} of reviewers recommend this product</div>
        <div className={styles.ratingDistribution}>Star Distribution: </div>
        <ReviewRatingDistribution fiveStarTotal={this.state.fiveStarTotal} fourStarTotal={this.state.fourStarTotal} threeStarTotal={this.state.threeStarTotal} twoStarTotal={this.state.twoStarTotal} oneStarTotal={this.state.oneStarTotal} />
        <div className={styles.totalReviews}>{this.state.reviewCount} Reviews</div>
        <div>
          {
            reviewsData.results.map((review) => (
              <ReviewTiles review={review} key={review.review_id} />
            ))
          }
        </div>
        <ReviewsAddForm addReview={this.addReview} />
        <ReviewsMoreReviews />
      </div>
    );
  }
}

export default ReviewsList;

// Notes and Experimentation:

// getIndividualStarTotal() {
//   const fiveStarCount = 1;
//   const fourStarCount = 1;
//   const threeStarCount = 1;
//   const twoStarCount = 1;
//   const oneStarCount = 1;
//   for (let i = 0; i < reviewsData.results.length; i += 1) {
//     const individualStarRating = reviewsData.results[i].rating;
//     if (individualStarRating === 5) {
//       fiveStarCount += 1;
//     }
//     if (individualStarRating === 4) {
//       fourStarCount += 1;
//     }
//     if (individualStarRating === 3) {
//       threeStarCount += 1;
//     }
//     if (individualStarRating === 2) {
//       twoStarCount += 1;
//     }
//     if (individualStarRating === 1) {
//       oneStarCount += 1;
//     }
//   }
//   this.setState({ fiveStarTotal: fiveStarCount });
//   this.setState({ fourStarTotal: fourStarCount });
//   this.setState({ threeStarTotal: threeStarCount });
//   this.setState({ twoStarTotal: twoStarCount });
//   this.setState({ oneStarTotal: fiveStarCount });
// }

// const {
//   overallRating,
//   email,
//   reviewUsername,
//   reviewSummary,
//   reviewBody,
//   size,
//   width,
//   comfort,
//   quality,
//   length,
//   fit,
//   recommend,
//   summaryTextCount,
//   descriptionTextCount,
//   uploadedFile,
// } = formData;

// const reviewObject = {
//   rating: formData.overallRating,
//   summary: formData.reviewSummary,
//   recommend: formData.recommend,
//   body: formData.reviewBody,
//   reviewer_name: formData.reviewUsername,
//   photos: formData.uploadedFile,
// };

// const {
//   rating,
//   summary,
//   recommend,
//   body,
//   reviewer_name,
//   photos,
// } = reviewObject;
// const { overallRating, reviewSummary, recommend, reviewBody, reviewUsername, uploadedFile } = formData;
// reviewObject.rating = formData.overallRating;
