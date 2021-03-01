import React from 'react';
import styles from './ReviewsAddForm.css';

class ReviewsAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: '',
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
      recommend: '',
      summaryTextCount: 0,
      descriptionTextCount: 1000,
      uploadedFile: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSummaryTextChange = this.handleSummaryTextChange.bind(this);
    this.handleDescriptionTextChange = this.handleDescriptionTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSummaryTextChange(event) {
    const summaryEventChange = event.target.value;
    console.log(summaryEventChange, summaryEventChange.length);
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
    // Need to have function that adds reviews to a tile and adds to list - function passed as props
    // this.addReview(this.state.______);
    // Need to reset state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Write New Review</h2>

          <h4>Overall Rating:</h4>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="overallRating" value="1" />
            <label for="1"> 1 - Poor </label>
            <input type="radio" id="2" name="overallRating" value="2" />
            <label for="2"> 2 - Fair </label>
            <input type="radio" id="3" name="overallRating" value="3" />
            <label for="3"> 3 - Average </label>
            <input type="radio" id="4" name="overallRating" value="4" />
            <label for="4"> 4 - Good </label>
            <input type="radio" id="5" name="overallRating" value="5" />
            <label for="5"> 5 - Great </label>
          </div>

          <h4>What is your email?</h4>
          <input className={styles.emailInput} onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="Example: abc@123.com" required />

          <h4>What is your username?</h4>
          <div>
            <input className={styles.usernameInput} onChange={this.handleChange} type="text" name="reviewUsername" value={this.state.reviewUsername} placeholder="Example: monica927" required />
          </div>
          <small>For privacy reasons, please do not use your full name or email as username</small>

          <h4>Review Summary:</h4>
          <textarea className={styles.summaryText} onChange={this.handleSummaryTextChange} type="text" name="reviewSummary" value={this.state.reviewSummary} placeholder="Example: Best purchase ever!" maxLength="60" />
          <div>
            <small>Character Count: {this.state.summaryTextCount} of 60</small>
          </div>

          <h4>Review Description:</h4>
          <textarea className="descriptionText" onChange={this.handleDescriptionTextChange} type="text" name="reviewBody" value={this.state.reviewBody} placeholder="Why did you like or dislike the product?" required minLength="50" maxLength="1000" />
          <div>
            <small>Remaining Characters: {this.state.descriptionTextCount}</small>
          </div>

          <h4>Characteristics:</h4>

          <h5>Size: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="size" value="1" />
            <label for="1"> 1 - A size too small </label>
            <input type="radio" id="2" name="size" value="2" />
            <label for="2"> 2 - Half size too small </label>
            <input type="radio" id="3" name="size" value="3" />
            <label for="3"> 3 - Perfect </label>
            <input type="radio" id="4" name="size" value="4" />
            <label for="4"> 4 - Half size too big </label>
            <input type="radio" id="5" name="size" value="5" />
            <label for="5"> 5 - A size too big </label>
          </div>

          <h5>Width: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="width" value="1" />
            <label for="1"> 1 - Too narrow </label>
            <input type="radio" id="2" name="width" value="2" />
            <label for="2"> 2 - Slightly narrow </label>
            <input type="radio" id="3" name="width" value="3" />
            <label for="3"> 3 - Perfect </label>
            <input type="radio" id="4" name="width" value="4" />
            <label for="4"> 4 - Slightly wide </label>
            <input type="radio" id="5" name="width" value="5" />
            <label for="5"> 5 - Too wide </label>
          </div>

          <h5>Comfort: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="comfort" value="1" />
            <label for="1"> 1 - Uncomfortable </label>
            <input type="radio" id="2" name="comfort" value="2" />
            <label for="2"> 2 - Slightly uncomfortable </label>
            <input type="radio" id="3" name="comfort" value="3" />
            <label for="3"> 3 - Okay </label>
            <input type="radio" id="4" name="comfort" value="4" />
            <label for="4"> 4 - Comfortable </label>
            <input type="radio" id="5" name="comfort" value="5" />
            <label for="5"> 5 - Perfect </label>
          </div>

          <h5>Quality: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="quality" value="1" />
            <label for="1"> 1 - Poor </label>
            <input type="radio" id="2" name="quality" value="2" />
            <label for="2"> 2 - Below Average </label>
            <input type="radio" id="3" name="quality" value="3" />
            <label for="3"> 3 - What I expected </label>
            <input type="radio" id="4" name="quality" value="4" />
            <label for="4"> 4 - Pretty great </label>
            <input type="radio" id="5" name="quality" value="5" />
            <label for="5"> 5 - Perfect </label>
          </div>

          <h5>Length: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="length" value="1" />
            <label for="1"> 1 - Runs short </label>
            <input type="radio" id="2" name="length" value="2" />
            <label for="2"> 2 - Runs slightly short </label>
            <input type="radio" id="3" name="length" value="3" />
            <label for="3"> 3 - Perfect </label>
            <input type="radio" id="4" name="length" value="4" />
            <label for="4"> 4 - Runs slightly long </label>
            <input type="radio" id="5" name="length" value="5" />
            <label for="5"> 5 - Runs long </label>
          </div>

          <h5>Fit: </h5>
          <div onChange={this.handleChange}>
            <input type="radio" id="1" name="fit" value="1" />
            <label for="1"> 1 - Runs tight </label>
            <input type="radio" id="2" name="fit" value="2" />
            <label for="2"> 2 - Runs slightly tight </label>
            <input type="radio" id="3" name="fit" value="3" />
            <label for="3"> 3 - Perfect </label>
            <input type="radio" id="4" name="fit" value="4" />
            <label for="4"> 4 - Runs slightly long </label>
            <input type="radio" id="5" name="fit" value="5" />
            <label for="5"> 5 - Runs long </label>
          </div>

          <h4>Do you recommend this product?</h4>
          <div onChange={this.handleChange}>
            <input type="radio" id="yes" name="recommend" value="yes" />
            <label for="yes">Yes </label>
            <input type="radio" id="no" name="recommend" value="no" />
            <label for="no">No </label>
          </div>

          <h4>Photos:</h4>
          <small>Upload Your Photos</small>
          <div>
            <input className={styles.fileInput} type="file" id="uploadedFile" onChange={this.handleFileUpload} />
          </div>
          <button className={styles.addButton} onClick={() => {}} type="button">Add Review</button>
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
