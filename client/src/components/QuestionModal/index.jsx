import React from 'react';
import styles from './QuestionModal.css';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      errors: {
        question: '',
        nickname: '',
        email: ''
      }

    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate() {
    console.log('validating')

  }

  handleSubmitClick(event) {
    event.preventDefault();
    this.validate()
   this.props.modalclose();
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className={styles.questionModalForm}>
        <form className={styles.modalform} onChange={this.handleOnChange}>
          <textarea
            type="text"
            name="question"
            placeholder="Enter your question"
            maxLength="1000"
          />
          <small>please enter a question</small>
          <input
            type="text"
            name="nickname"
            placeholder="Example: jackson11!"
            maxLength="60"
          />
          <small>please enter a nickname</small>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            maxLength="60"
          />
          <small>please enter email in correct format</small>
          <small>For authentication reasons, you will not be emailed</small>
        </form>
        <button type="button" onClick={this.handleSubmitClick} className={styles.buttonModalForm}>Submit</button>
      </div>
    );
  }
}

export default QuestionModal;
