import React from 'react';
import styles from './MoreAnsweredQuestions.css';

const MoreAnsweredQuestions = (props) => (
  <button
    className={styles.MoreAnsweredQuestions}
    type="button"
    onClick={props.click}
  >
    MORE ANSWERED QUESTIONS
  </button>
);

export default MoreAnsweredQuestions;
