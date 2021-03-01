import React from 'react'
import styles from './QuestionModal.css';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: ''

    };
  }

  render() {
    return (
      <div className={styles.questionModalForm}>
      <form className={styles.modalform}>
        <input
          type="text"
          name="question"
          placeholder="Enter your question"
        />
        <input
          type="text"
          name="nickname"
          placeholder="Example: jackson11!"
        />
        <input
          type="email"
          name="email"
          placeholder="enter email"
        />
        <small>For authentication reasons, you will not be emailed</small>
      </form>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default QuestionModal;
