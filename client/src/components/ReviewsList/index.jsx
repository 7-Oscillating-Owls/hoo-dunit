/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import ReviewRatingDistribution from '../ReviewRatingDistribution';
import ReviewCharacteristics from '../ReviewCharacteristics';
import ReviewTiles from '../ReviewTiles';
import ReviewAddFormModal from '../ReviewAddFormModal';
import ReviewsMoreReviews from '../ReviewsMoreReviews';
import styles from './ReviewsList.css';
// import ReviewsAddForm from '../ReviewsAddForm';
// import exampleReviewsData from '../../../../data/reviews';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      metaObject: {},
      reviewCount: 0,
      overallRating: 0,
      recommendPercent: 0,
      fiveStarTotal: '',
      fourStarTotal: '',
      threeStarTotal: '',
      twoStarTotal: '',
      oneStarTotal: '',
      displayModal: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
    this.getOverallView = this.getOverallView.bind(this);
    this.addReview = this.addReview.bind(this);
    this.getIndividualStarTotal = this.getIndividualStarTotal.bind(this);
    this.openAddReviewModal = this.openAddReviewModal.bind(this);
    this.closeAddReviewModal = this.closeAddReviewModal.bind(this);
    this.getMoreReviews = this.getMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaData();
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        const reviewsData = response.data.results;
        this.setState({ reviewsList: reviewsData });
        this.setState({ reviewCount: reviewsData.length });
        this.getOverallView();
        this.getIndividualStarTotal();
      })
      .catch((error) => {
        console.log('Error fetching reviews: ', error);
      })
  }

  getMetaData() {
    axios.get('/reviews/meta')
      .then((response) => {
        this.setState({ metaObject: response.data});
      })
      .catch((error) => {
        console.log('Error fetching meta data: ', error);
      })
  }

  getOverallView() {
    let ratingTotal = 0;
    let recommendTotal = 0;
    this.state.reviewsList.forEach((review) => {
      ratingTotal += review.rating;
      if (review.recommend === true) {
        recommendTotal += 1;
      }
    });
    const averageRating = ratingTotal / (this.state.reviewCount);
    const recommended = `${((recommendTotal / (this.state.reviewCount)).toFixed(2)) * 100}%`;
    this.setState({ overallRating: averageRating, recommendPercent: recommended });
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
    // reviewsData.push(reviewObject);
    // const reviewMetaCharacteristicsObject = {
    //   Size: {
    //     value: formData.size,
    //   },
    //   Width: {
    //     value: formData.width,
    //   },
    //   Comfort: {
    //     value: formData.comfort,
    //   },
    // };
      // Will need to change this to post request to POST/reviews/meta
    console.log('Review Added!', reviewMetaCharacteristicsObject);
  }

  getIndividualStarTotal() {
    let fiveStarCount = 0;
    let fourStarCount = 0;
    let threeStarCount = 0;
    let twoStarCount = 0;
    let oneStarCount = 0;

    this.state.reviewsList.forEach((review) => {
      if (review.rating === 5) {
        fiveStarCount += 1;
      }
      if (review.rating === 4) {
        fourStarCount += 1;
      }
      if (review.rating === 3) {
        threeStarCount += 1;
      }
      if (review.rating === 2) {
        twoStarCount += 1;
      }
      if (review.rating === 1) {
        oneStarCount += 1;
      }
    });
    this.setState({ fiveStarTotal: fiveStarCount });
    this.setState({ fourStarTotal: fourStarCount });
    this.setState({ threeStarTotal: threeStarCount });
    this.setState({ twoStarTotal: twoStarCount });
    this.setState({ oneStarTotal: oneStarCount });
  }

  // eslint-disable-next-line class-methods-use-this
  openAddReviewModal() {
    this.setState({ displayModal: true });
  }

  closeAddReviewModal() {
    this.setState({ displayModal: false });
  }

  // eslint-disable-next-line class-methods-use-this
  getMoreReviews() {
    // Display two more reviews
    console.log('More Reviews clicked');
  }

  render() {
    let display = this.state.displayModal;
    let ReviewModalRender;
    if (display === true) {
      ReviewModalRender = <ReviewAddFormModal className={styles.modalBackdrop} addReview={this.addReview} displayModal={this.state.displayModal} closeAddReviewModal={this.closeAddReviewModal}/>
    } else {
      ReviewModalRender = null;
    }
    return (
      <div className={styles.reviewsList}>
        <div className={styles.ratingsOverview}>
          <h3 className={styles.ratingsAndReviewsTitle}>Reviews and Ratings</h3>
          <div className={styles.overallRating}>{this.state.overallRating}</div>
          <div className={styles.starRating}>
            <ReviewsAverageOverviewStars ratings={this.state.overallRating} />
          </div>
          <div className={styles.recommendOverview}>
            {this.state.recommendPercent}
            {' '}
            of reviewers recommend this product
          </div>
          <ReviewRatingDistribution
            className={styles.ratingDistribution}
            reviewCount={this.state.reviewCount}
            fiveStarTotal={this.state.fiveStarTotal}
            fourStarTotal={this.state.fourStarTotal}
            threeStarTotal={this.state.threeStarTotal}
            twoStarTotal={this.state.twoStarTotal}
            oneStarTotal={this.state.oneStarTotal}
          />
          <div className={styles.reviewTotal}>
            {this.state.reviewCount}
            {' '}
            Total Reviews
          </div>
          <ReviewCharacteristics metaObject={this.state.metaObject} />
        </div>
        <div>
          <div>
            {
              this.state.reviewsList.map((review) => (
                <ReviewTiles review={review} key={review.review_id} />
              ))
            }
          </div>
          {ReviewModalRender}
          <ReviewsMoreReviews
            openAddReviewModal={this.openAddReviewModal}
            getMoreReviews={this.getMoreReviews}
          />
        </div>
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
