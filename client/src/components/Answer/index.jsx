import React from 'react';
import styles from './Answer.css';

const Answer = (props) => {

    return (
      <div className={styles.answer}>
        <p>{props.answer.answer_id}</p>
      </div>
    );

    }

export default Answer;
