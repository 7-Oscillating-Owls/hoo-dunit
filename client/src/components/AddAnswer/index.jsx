import React from 'react';
import styles from './AddAnswer.css';
import AnswerModal from '../AnswerModal';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ showAnswerModal: true });
  }

  handleModalClose() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span className={styles.form}>
        <small className={styles.AddAnswer}><a onClick={this.handleClick}>Add Answer</a></small>
        {this.state.showAnswerModal ? <AnswerModal modalclose={this.handleModalClose} /> : null}
      </span>
    );
  }
}

export default AddAnswer;
