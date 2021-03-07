import React from 'react';
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
      length: '',
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  onStarClick(index) {
    this.setState({ overallRating: index });
  }

  starHover(index) {
    console.log("Hover: ", index);
    this.setState({ hoverRating: index });
  }

  starNotHover() {
    this.setState({ hoverRating: 0 });
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.addReview(this.state);
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
          <h2>Write New Review</h2>

          <h4>Overall Rating:</h4>
          <ReviewsHoverStars
            handleChange={this.handleChange}
            starHover={this.starHover}
            starNotHover={this.starNotHover}
            overallRating={this.state.overallRating}
            hoverRating={this.state.hoverRating}
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
          <input className={styles.emailInput} onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="Example: abc@123.com" required />
          <br />
          <small> * Required</small>
          <br />
          <br />
          <h4>What is your username?</h4>
          <div>
            <input className={styles.usernameInput} onChange={this.handleChange} type="text" name="reviewUsername" value={this.state.reviewUsername} placeholder="Example: monica927" required />
          </div>
          <small> * Required | </small>
          <small>For privacy reasons, please do not use your full name or email as username</small>
          <br />
          <br />
          <h4>Review Summary:</h4>
          <textarea className={styles.summaryText} onChange={this.handleSummaryTextChange} type="text" name="reviewSummary" value={this.state.reviewSummary} placeholder="Example: Best purchase ever!" maxLength="60" />
          <div>
            <small>Character Count: {this.state.summaryTextCount} of 60</small>
          </div>
          <br />
          <br />
          <h4>Review Description:</h4>
          <textarea className="descriptionText" onChange={this.handleDescriptionTextChange} type="text" name="reviewBody" value={this.state.reviewBody} placeholder="Why did you like or dislike the product?" required minLength="50" maxLength="1000" />
          <div>
            <small>* Required | </small>
            <small>Remaining Characters: {this.state.descriptionTextCount}</small>
          </div>
          <br />
          <br />
          <h4>Characteristics:</h4>
          <h5>Size: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="size1" name="size" value="1" />
            <label htmlFor="size1"> 1 - A size too small </label>
            <input type="radio" id="size2" name="size" value="2" />
            <label htmlFor="size2"> 2 - Half size too small </label>
            <input type="radio" id="size3" name="size" value="3" />
            <label htmlFor="size3"> 3 - Perfect </label>
            <input type="radio" id="size4" name="size" value="4" />
            <label htmlFor="size4"> 4 - Half size too big </label>
            <input type="radio" id="5" name="size" value="5" />
            <label htmlFor="5"> 5 - A size too big </label>
          </div>
          <br />
          <h5>Width: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="width1" name="width" value="1" />
            <label htmlFor="width1"> 1 - Too narrow </label>
            <input type="radio" id="width2" name="width" value="2" />
            <label htmlFor="width2"> 2 - Slightly narrow </label>
            <input type="radio" id="width3" name="width" value="3" />
            <label htmlFor="width3"> 3 - Perfect </label>
            <input type="radio" id="width4" name="width" value="4" />
            <label htmlFor="width4"> 4 - Slightly wide </label>
            <input type="radio" id="width5" name="width" value="5" />
            <label htmlFor="width5"> 5 - Too wide </label>
          </div>
          <br />
          <h5>Comfort: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="comfort1" name="comfort" value="1" />
            <label htmlFor="comfort1"> 1 - Uncomfortable </label>
            <input type="radio" id="comfort2" name="comfort" value="2" />
            <label htmlFor="comfort2"> 2 - Slightly uncomfortable </label>
            <input type="radio" id="comfort3" name="comfort" value="3" />
            <label htmlFor="comfort3"> 3 - Okay </label>
            <input type="radio" id="comfort4" name="comfort" value="4" />
            <label htmlFor="comfort4"> 4 - Comfortable </label>
            <input type="radio" id="comfort5" name="comfort" value="5" />
            <label htmlFor="comfort5"> 5 - Perfect </label>
          </div>
          <br />
          <h5>Quality: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="quality1" name="quality" value="1" />
            <label htmlFor="quality1"> 1 - Poor </label>
            <input type="radio" id="quality2" name="quality" value="2" />
            <label htmlFor="quality2"> 2 - Below Average </label>
            <input type="radio" id="quality3" name="quality" value="3" />
            <label htmlFor="quality3"> 3 - What I expected </label>
            <input type="radio" id="quality4" name="quality" value="4" />
            <label htmlFor="quality4"> 4 - Pretty great </label>
            <input type="radio" id="quality5" name="quality" value="5" />
            <label htmlFor="quality5"> 5 - Perfect </label>
          </div>
          <br />
          <h5>Length: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="length1" name="length" value="1" />
            <label htmlFor="length1"> 1 - Runs short </label>
            <input type="radio" id="length2" name="length" value="2" />
            <label htmlFor="length2"> 2 - Runs slightly short </label>
            <input type="radio" id="length3" name="length" value="3" />
            <label htmlFor="length3"> 3 - Perfect </label>
            <input type="radio" id="length4" name="length" value="4" />
            <label htmlFor="length4"> 4 - Runs slightly long </label>
            <input type="radio" id="length5" name="length" value="5" />
            <label htmlFor="length5"> 5 - Runs long </label>
          </div>
          <br />
          <h5>Fit: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="fit1" name="fit" value="1" />
            <label htmlFor="fit1"> 1 - Runs tight </label>
            <input type="radio" id="fit2" name="fit" value="2" />
            <label htmlFor="fit2"> 2 - Runs slightly tight </label>
            <input type="radio" id="fit3" name="fit" value="3" />
            <label htmlFor="fit3"> 3 - Perfect </label>
            <input type="radio" id="fit4" name="fit" value="4" />
            <label htmlFor="fit4"> 4 - Runs slightly long </label>
            <input type="radio" id="fit5" name="fit" value="5" />
            <label htmlFor="fit5"> 5 - Runs long </label>
          </div>
          <br />
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
          <button className={styles.addButton} type="submit">Submit Review</button>
        <button
          className={styles.cancelButton}
          type="button"
          onClick={this.props.closeAddReviewModal}
        >
          Cancel
        </button>
        </form>
      </div>
    );
  }
}

export default ReviewsAddForm;

// Notes and Experimentation:
// // Will need to have an onClick event listener and handler
// const ReviewsAddForm = () => (
//   <div className={styles.reviewsAddForm}>
//     <button className={styles.addButton} type="submit">Add Review</button>
//   </div>
// );
