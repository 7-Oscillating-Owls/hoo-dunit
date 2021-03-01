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
      recommendProduct: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // eslint-disable-next-line class-methods-use-this
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
          <input onChange={this.handleChange} type="text" name="overallRating" value={this.state.overallRating} placeholder="Rating: 1 - 5" />
          <h4>What is your email?</h4>
          <input onChange={this.handleChange} type="text" name="email" value={this.state.email} placeholder="Example: abc@123.com" />
          <h4>What is your username?</h4>
          <p>For privacy reasons, do not use your full name or email address as username</p>
          <input onChange={this.handleChange} type="text" name="reviewUsername" value={this.state.reviewUsername} placeholder="Example: monica927" />
          <h4>Review Summary:</h4>
          <input onChange={this.handleChange} type="text" name="reviewSummary" value={this.state.reviewSummary} placeholder="Review Summary" />
          <h4>Review Description:</h4>
          <input onChange={this.handleChange} type="text" name="reviewBody" value={this.state.reviewBody} placeholder="Why did you like or dislike the product?" />
          <h4>Characteristics:</h4>
          <button type="submit">Characteristics</button>
          <h4>Do you recommend this product?</h4>
          <input onChange={this.handleChange} type="text" name="recommendProduct" value={this.state.recommendProduct} placeholder="Product Recommendation" />
          <h4>Photos:</h4>
          <p>Upload Your Photos</p>
          <button className={styles.addButton} type="submit">Add Review</button>
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
