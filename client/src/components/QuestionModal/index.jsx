import React from 'react';
import styles from './QuestionModal.css';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      questionError: null,
      nicknameError: null,
      emailError: null

    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.validate = this.validate.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  validate() {
    { this.state.question.length < 1 ? this.setState({ questionError: 'Please enter a question' }) : this.setState({questionError: null}) }
    { this.state.nickname.length < 1 ? this.setState({ nicknameError: 'please enter a nickname' }) : this.setState({nicknameError: null}) }
    { !this.state.email.includes('@') ? this.setState({emailError: 'please enter valid email'}) : this.setState({emailError: null})}

  }

  closeModal() {
    //this.props.modalclose()
    }




  handleSubmitClick(event) {
    event.preventDefault();
    this.validate()
     this.closeModal();
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
          <small className={styles.errors}>{this.state.questionError}</small>
          <input
            type="text"
            name="nickname"
            placeholder="Example: jackson11!"
            maxLength="60"

          />
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
        <button type="button" onClick={this.handleSubmitClick} className={styles.buttonModalForm}>Submit</button>
      </div>
    );
  }
}

export default QuestionModal;
