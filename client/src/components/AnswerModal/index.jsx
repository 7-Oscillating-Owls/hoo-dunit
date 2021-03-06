import React from 'react'
import styles from './AnswerModal.css'

class AnswerModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      nickname: '',
      email: '',
      questionError: null,
      nicknameError: null,
      emailError: null
    }
    this.validate = this.validate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  validate() {
    { this.state.question.length < 1 ? this.setState({ questionError: 'Please enter a question' }) : this.setState({ questionError: null }) }
    { this.state.nickname.length < 1 ? this.setState({ nicknameError: 'Please enter a nickname' }) : this.setState({ nicknameError: null }) }
    { !this.state.email.includes('@') ? this.setState({ emailError: 'Please enter valid email' }) : this.setState({ emailError: null }) }
  }

  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitClick(event) {
    event.preventDefault();
    this.validate();

  }
  render() {
    return (

      <div className={styles.AnswerModal}>
        <h3>Submit your Answer</h3>
        <form className={styles.modalform} onChange={this.handleOnChange}>
          <textarea
            type="text"
            name="question"
            placeholder="Enter your Answer"
            maxLength="1000"
          />
          <small>For privacy reasons, do not use your full name or email address</small>
          <small className={styles.errors}>{this.state.questionError}</small>
          <input
            type="text"
            name="nickname"
            placeholder="Example: jackson11!"
            maxLength="60"
          />
          <small>For authentication reasons, you will not be emailed</small>
          <small className={styles.errors}>{this.state.nicknameError}</small>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            maxLength="60"
          />
          <small className={styles.errors}>{this.state.emailError}</small>
          <small>For authentication reasons, you will not be emailed</small>
        </form>
        <button type="button" onClick={this.handleSubmitClick} className={styles.answerModalForm}>Submit</button>
      </div>
    )
  }
}

export default AnswerModal