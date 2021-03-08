/* eslint-disable react/prop-types */
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
      displayModal: false,
    };
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.openAddReviewModal = this.openAddReviewModal.bind(this);
    this.closeAddReviewModal = this.closeAddReviewModal.bind(this);
    this.getMoreReviews = this.getMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        const reviewsData = response.data.results;
        this.setState({ reviewsList: reviewsData });
      })
      .catch((error) => {
        console.log('Error fetching reviews: ', error);
      });
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
    // reviewsList.push(reviewObject);
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
    const {
      metaObject,
      recommendPercent,
      totalNumberOfStars,
      starRating,
      fiveStarTotal,
      fourStarTotal,
      threeStarTotal,
      twoStarTotal,
      oneStarTotal,
    } = this.props;

    const {
      displayModal,
      reviewsList,
    } = this.state;

    let ReviewModalRender;
    if (displayModal === true) {
      ReviewModalRender = (
        <ReviewAddFormModal
          className={styles.modalBackdrop}
          addReview={this.addReview}
          displayModal={displayModal}
          closeAddReviewModal={this.closeAddReviewModal}
        />
      );
    } else {
      ReviewModalRender = null;
    }

    return (
      <div className={styles.reviewsList}>
        <div>
          <div className={styles.ratingsOverview}>
            <h3 className={styles.ratingsAndReviewsTitle}>Reviews and Ratings</h3>
            <div className={styles.overallRating}>{starRating}</div>
            <div className={styles.starRating}>
              <ReviewsAverageOverviewStars starRating={starRating} />
            </div>
            <div className={styles.recommendOverview}>
              <div className={styles.recommendedPercent}>
                {recommendPercent}
                %
              </div>
              {' '}
              of reviewers recommend this product
            </div>
            <ReviewRatingDistribution
              className={styles.ratingDistribution}
              reviewCount={totalNumberOfStars}
              fiveStarTotal={Number(fiveStarTotal)}
              fourStarTotal={Number(fourStarTotal)}
              threeStarTotal={Number(threeStarTotal)}
              twoStarTotal={Number(twoStarTotal)}
              oneStarTotal={Number(oneStarTotal)}
            />
            <div className={styles.reviewTotal}>
              {totalNumberOfStars}
              {' '}
              Total Reviews
            </div>
            <ReviewCharacteristics metaObject={metaObject} />
          </div>
        </div>
        <div>
          <div>
            {
              reviewsList.map((review) => (
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
