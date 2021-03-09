import React from 'react';
import Answer from '../Answer';
import styles from './LoadMoreAnswers.css';

const LoadMoreAnswers = (props) => (
  <button
    className={styles.loadmoreanswers}
    type="button"
    onClick={props.click}
  >
    LOAD MORE ANSWERS
  </button>

);

export default LoadMoreAnswers;
