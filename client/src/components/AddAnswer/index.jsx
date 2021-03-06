import React from 'react';
import styles from './AddAnswer.css';


class AddAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswerModal: false
    }
  }

  render() {
    return (
      <small className={styles.AddAnswer}><a>Add Answer</a></small>
    )
  }
}

// const AddAnswer = () => (
//   <small className={styles.AddAnswer}><a>Add Answer</a></small>
// );

export default AddAnswer;

