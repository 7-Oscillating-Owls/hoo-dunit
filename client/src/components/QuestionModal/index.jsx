import React from 'react';
import styles from './QuestionModal.css';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: ''

    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick(event) {
    event.preventDefault();
   this.props.modalclose();

  }

  render() {
    return (
      <div className={styles.questionModalForm}>
        <form className={styles.modalform}>
          <textarea
            type="text"
            name="question"
            placeholder="Enter your question"
            maxLength="1000"
          />
          <textarea
            type="text"
            name="nickname"
            placeholder="Example: jackson11!"
            maxLength="60"
          />
          <input
            type="email"
            name="email"
            placeholder="enter email"
          />
          <small>For authentication reasons, you will not be emailed</small>
        </form>
        <button type="button" onClick={this.handleSubmitClick} className={styles.buttonModalForm}>Submit</button>
      </div>
    );
  }
}

export default QuestionModal;
