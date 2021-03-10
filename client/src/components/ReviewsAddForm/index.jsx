/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewCharacteristicsAddForm from '../ReviewCharacteristicsAddForm';
import ReviewsHoverStars from '../ReviewsHoverStars';
import styles from './ReviewsAddForm.css';

class ReviewsAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '',
      hoverRating: '',
      email: '',
      reviewUsername: '',
      reviewSummary: '',
      reviewBody: '',
      size: '',
      width: '',
      comfort: '',
      quality: '',
      productLength: '',
      fit: '',
      recommended: true,
      summaryTextCount: 0,
      descriptionTextCount: 1000,
      uploadedFile: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.starHover = this.starHover.bind(this);
    this.starNotHover = this.starNotHover.bind(this);
    this.handleSummaryTextChange = this.handleSummaryTextChange.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleAddCharacteristics = this.handleAddCharacteristics.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSummaryTextChange(event) {
    const summaryEventChange = event.target.value;
    this.setState({ summaryTextCount: summaryEventChange.length });
    this.setState({ reviewSummary: summaryEventChange });
  }

  handleDescriptionTextChange(event) {
    const eventChange = event.target.value;
    this.setState({ descriptionTextCount: (1000 - eventChange.length) });
    this.setState({ reviewBody: eventChange });
  }

  handleFileUpload(event) {
    this.setState({ uploadedFile: event.target.files });
  }

  handleAddCharacteristics(id, name) {
    console.log('YAY Charactierstic id and name', id, name);
    if (name === 'Size') {
      this.setState({ size: id, name });
    }
    if (name === 'Width') {
      this.setState({ width: id, name });
    }
    if (name === 'Comfort') {
      this.setState({ comfort: id, name });
    }
    if (name === 'Quality') {
      this.setState({ quality: id, name });
    }
    if (name === 'Length') {
      this.setState({ productLength: id, name });
    }
    if (name === 'Fit') {
      this.setState({ fit: id, name });
    }
  }

  handleSubmit(event) {
    const { addReview } = this.props;
    event.preventDefault();
    addReview(this.state);
  }

  onStarClick(index) {
    this.setState({ overallRating: index });
  }

  starHover(index) {
    this.setState({ hoverRating: index });
  }

  starNotHover() {
    this.setState({ hoverRating: 0 });
  }

  render() {
    const {
      characteristicNames,
      characteristicIds,
      closeAddReviewModal,
    } = this.props;
    const {
      overallRating,
      hoverRating,
      email,
      reviewUsername,
      reviewSummary,
      summaryTextCount,
      reviewBody,
      descriptionTextCount,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Write New Review</h2>

          <h4>Overall Rating:</h4>
          <ReviewsHoverStars
            handleChange={this.handleChange}
            starHover={this.starHover}
            starNotHover={this.starNotHover}
            overallRating={overallRating}
            hoverRating={hoverRating}
          />
          <div>
            <br />
            <small>* Required</small>
            <br />
            <br />
            <p>1 - Poor</p>
            <p>2 - Fair</p>
            <p>3 - Average</p>
            <p>4 - Good</p>
            <p>5 - Great</p>
          </div>
          <br />
          <h4>What is your email?</h4>
          <input
            className={styles.emailInput}
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            placeholder="Example: abc@123.com"
            required
          />
          <br />
          <small> * Required</small>
          <br />
          <br />
          <h4>What is your username?</h4>
          <div>
            <input
              className={styles.usernameInput}
              onChange={this.handleChange}
              type="text"
              name="reviewUsername"
              value={reviewUsername}
              placeholder="Example: monica927"
              required
            />
          </div>
          <small> * Required | </small>
          <small>For privacy reasons, please do not use your full name or email as username</small>
          <br />
          <br />
          <h4>Review Summary:</h4>
          <textarea
            className={styles.summaryText}
            onChange={this.handleSummaryTextChange}
            type="text"
            name="reviewSummary"
            value={reviewSummary}
            placeholder="Example: Best purchase ever!"
            maxLength="60"
          />
          <div>
            <small>Character Count: {summaryTextCount} of 60</small>
          </div>
          <br />
          <br />
          <h4>Review Description:</h4>
          <textarea
            className="descriptionText"
            onChange={this.handleDescriptionTextChange}
            type="text"
            name="reviewBody"
            value={reviewBody}
            placeholder="Why did you like or dislike the product?"
            required
            minLength="50"
            maxLength="1000"
          />
          <div>
            <small>* Required | </small>
            <small>
              Remaining Characters:
              {' '}
              {descriptionTextCount}
            </small>
          </div>
          <br />
          <br />
          <br />
          <ReviewCharacteristicsAddForm
            handleChange={this.handleChange}
            characteristicNames={characteristicNames}
            characteristicIds={characteristicIds}
            handleAddCharacteristics={this.handleAddCharacteristics}
          />
          <h4>Photos:</h4>
          <small>Upload Your Photos</small>
          <div>
            <input className={styles.fileInput} type="file" id="uploadedFile" onChange={this.handleFileUpload} />
          </div>
          <h4>Do you recommend this product?</h4>
          <small>* Required</small>
          <br />
          <br />
          <div onChange={this.handleChange}>
            <input type="radio" id="recommendedYes" name="recommended" value="true" require />
            <label htmlFor="recommendedYes">Yes </label>
            <input type="radio" id="recommendedNo" name="recommended" value="false" />
            <label htmlFor="recommendedNo">No </label>
          </div>
          <br />
          <br />
          <br />
          <button
            className={styles.addButton}
            type="submit"
          >
            Submit Review
          </button>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={closeAddReviewModal}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewsAddForm;
