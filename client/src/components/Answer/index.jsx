import React from 'react';
import styles from './Answer.css';

const Answer = (props) => (
  <div className={styles.answer}>
    <h4>A:</h4>
    <p>{props.answer}</p>
  </div>
);

export default Answer;
