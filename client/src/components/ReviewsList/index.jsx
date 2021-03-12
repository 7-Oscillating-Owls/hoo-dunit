import React from 'react';
import axios from 'axios';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import ReviewRatingDistribution from '../ReviewRatingDistribution';
import ReviewCharacteristics from '../ReviewCharacteristics';
import ReviewTiles from '../ReviewTiles';
import ReviewAddFormModal from '../ReviewAddFormModal';
import ReviewsMoreReviews from '../ReviewsMoreReviews';
import { getAverageRating, getRecommendPercent } from '../ReviewUtils';
import styles from './ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      limitedReviewsList: [],
      sortList: 'newest',
      displayModal: false,
      displayMoreButton: true,
      numberOfReviewsDisplayed: 2,
      currentPage: 1,
    };
    this.handleSort = this.handleSort.bind(this);
    this.handleHelpfulnessClick = this.handleHelpfulnessClick.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.addReview = this.addReview.bind(this);
    this.openAddReviewModal = this.openAddReviewModal.bind(this);
    this.closeAddReviewModal = this.closeAddReviewModal.bind(this);
    this.getMoreReviews = this.getMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  componentDidUpdate(prev, previousState) {
    const { currentProduct } = this.props;
    const { sortList } = this.state;
    const { currentProduct: previousProduct } = prev;
    const { sortList: priorSortList } = previousState;
    let shouldGetReviews = false;
    if (currentProduct !== previousProduct) {
      shouldGetReviews = true;
    }
    if (sortList !== priorSortList) {
      shouldGetReviews = true;
    }
    if (shouldGetReviews === true) {
      this.getReviews();
    }
  }

  handleSort(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ sortList: event.target.value });
  }

  // Increment when someone clicks yes to helpfulness
  handleHelpfulnessClick(event, reviewIdInput) {
    event.preventDefault();
    const helpfulData = {};
    helpfulData.reviewId = reviewIdInput;
    axios.put(`/reviews/${reviewIdInput}/helpful`, helpfulData)
      .then(() => {
        console.log('Successfully incremented helpfulness');
        this.getReviews();
      })
      .catch((error) => {
        console.log('Error incrementing helpfulness: ', error);
      });
  }

  // Handles reporting when 'Report' is clicked
  handleReport(event, reviewIdInput) {
    event.preventDefault();
    const reportData = {};
    reportData.reviewId = reviewIdInput;
    axios.put(`/reviews/${reviewIdInput}/report`, reportData)
      .then(() => {
        console.log('Successfully reported review');
        this.getReviews();
      })
      .catch((error) => {
        console.log('Error resporting review: ', error);
      });
  }

  // Send current product id from App with get request and retrieve reviews list
  getReviews() {
    const { currentProduct } = this.props;
    const {
      currentPage,
      sortList,
    } = this.state;
    axios.get('/reviews', {
      params: {
        productId: currentProduct,
        page: currentPage,
        sort: sortList,
      },
    })
      .then((response) => {
        const reviewsData = response.data.results;
        this.setState({
          reviewsList: reviewsData,
          limitedReviewsList: reviewsData.slice(0, 2),
        });
        reviewsData.length < 2 ? this.setState({ displayMoreButton: false }) : this.setState({ displayMoreButton: true });
      })
      .catch((error) => {
        console.log('Error fetching reviews: ', error);
      });
  }

  // Display two more reviews each time more review button is clicked
  getMoreReviews() {
    const {
      reviewsList,
      numberOfReviewsDisplayed,
      currentPage,
    } = this.state;

    const { metaObject } = this.props;

    const { totalReviews } = getRecommendPercent(metaObject);

    if (reviewsList[numberOfReviewsDisplayed + 2]) {
      this.setState({
        limitedReviewsList: reviewsList.slice(0, (numberOfReviewsDisplayed + 2)),
        numberOfReviewsDisplayed: (numberOfReviewsDisplayed + 2),
      });
    } else if (reviewsList[numberOfReviewsDisplayed + 1]) {
      this.setState({
        limitedReviewsList: reviewsList,
        numberOfReviewsDisplayed: (numberOfReviewsDisplayed + 1),
        displayMoreButton: false,
      });
    } else {
      this.setState({
        limitedReviewsList: reviewsList,
        numberOfReviewsDisplayed: reviewsList.length,
        displayMoreButton: false,
      });
    }
    if (numberOfReviewsDisplayed === totalReviews) {
      this.setState({ displayMoreButton: false });
    }
    if (!reviewsList[numberOfReviewsDisplayed + 2] && !reviewsList[numberOfReviewsDisplayed + 1]) {
      this.setState({ currentPage: (currentPage + 1) });
    }
  }

  // Function sends post request with data from ReviewsAddForm
  addReview(formData) {
    const { currentProduct } = this.props;
    this.setState({ displayModal: false });

    const charObject = {};
    if (formData.Size) {
      const sizeKey = Object.keys(formData.Size)[0];
      charObject[sizeKey] = Number(formData.Size[sizeKey]);
    }
    if (formData.Width) {
      const widthKey = Object.keys(formData.Width)[0];
      charObject[widthKey] = Number(formData.Width[widthKey]);
    }
    if (formData.Comfort) {
      const comfortKey = Object.keys(formData.Comfort)[0];
      charObject[comfortKey] = Number(formData.Comfort[comfortKey]);
    }
    if (formData.Quality) {
      const qualityKey = Object.keys(formData.Quality)[0];
      charObject[qualityKey] = Number(formData.Quality[qualityKey]);
    }
    if (formData.Length) {
      const lengthKey = Object.keys(formData.Length)[0];
      charObject[lengthKey] = Number(formData.Length[lengthKey]);
    }
    if (formData.Fit) {
      const fitKey = Object.keys(formData.Fit)[0];
      charObject[fitKey] = Number(formData.Fit[fitKey]);
    }

    let wasRecommended;
    if (formData.recommended === 'false') {
      wasRecommended = false;
    } else {
      wasRecommended = true;
    }

    const reviewDataObject = {
      product_id: Number(currentProduct) || 14296,
      rating: Number(formData.overallRating),
      summary: formData.reviewSummary || '',
      body: formData.reviewBody,
      recommend: wasRecommended,
      name: formData.reviewUsername,
      email: formData.email,
      photos: formData.uploadedFile || [],
      characteristics: charObject,
    };

    axios.post('/reviews', reviewDataObject)
      .then((response) => {
        console.log('Successfully added review: ', response);
        this.getReviews();
      })
      .catch((error) => {
        console.log('Error adding review: ', error);
      });
  }

  // Display modal with add review form
  openAddReviewModal() {
    this.setState({ displayModal: true });
  }

  // Close add review modal
  closeAddReviewModal() {
    this.setState({ displayModal: false });
  }

  render() {
    const {
      metaObject,
      characteristicNames,
      characteristicIds,
    } = this.props;

    const {
      starRating,
      oneStarTotal,
      twoStarTotal,
      threeStarTotal,
      fourStarTotal,
      fiveStarTotal,
      totalReviews,
    } = getAverageRating(metaObject);

    const {
      recommendPercent,
      totalNumberOfStars,
    } = getRecommendPercent(metaObject);

    const {
      displayModal,
      displayMoreButton,
      limitedReviewsList,
    } = this.state;

    let ReviewModalRender;
    if (displayModal === true) {
      ReviewModalRender = (
        <ReviewAddFormModal
          className={styles.modalBackdrop}
          addReview={this.addReview}
          displayModal={displayModal}
          closeAddReviewModal={this.closeAddReviewModal}
          characteristicNames={characteristicNames}
          characteristicIds={characteristicIds}
        />
      );
    } else {
      ReviewModalRender = null;
    }

    return (
      <div>
        <div className={styles.sort}>
          <div> </div>
          <div>
            <button
              className={styles.newestButton}
              type="submit"
              onClick={this.handleSort}
              value="newest"
            >
              Newest
            </button>
            <button
              className={styles.relevantButton}
              type="submit"
              onClick={this.handleSort}
              value="relevant"
            >
              Relevant
            </button>
            <button
              className={styles.helpfulButton}
              type="submit"
              onClick={this.handleSort}
              value="helpful"
            >
              Helpful
            </button>
          </div>
        </div>
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
                reviewCount={totalReviews}
                fiveStarTotal={Number(fiveStarTotal)}
                fourStarTotal={Number(fourStarTotal)}
                threeStarTotal={Number(threeStarTotal)}
                twoStarTotal={Number(twoStarTotal)}
                oneStarTotal={Number(oneStarTotal)}
              />
              <div className={styles.reviewTotal}>
                {totalReviews}
                {' '}
                Total Reviews
              </div>
              <ReviewCharacteristics metaObject={metaObject} />
            </div>
          </div>
          <div>
            <div>
              {
                limitedReviewsList.map((review) => (
                  <ReviewTiles
                    handleHelpfulnessClick={this.handleHelpfulnessClick}
                    handleReport={this.handleReport}
                    review={review}
                    key={review.review_id}
                  />
                ))
              }
            </div>
            {ReviewModalRender}
            <ReviewsMoreReviews
              openAddReviewModal={this.openAddReviewModal}
              getMoreReviews={this.getMoreReviews}
              displayMoreButton={displayMoreButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
