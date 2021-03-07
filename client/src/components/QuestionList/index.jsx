import React from 'react';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';
import styles from './QuestionList.css';

const QuestionList = (props) => (
  <div className={styles.questionlist}>
    <p>Q: {props.question.question_body}</p>
    <span className={styles.sidebar}>
        <Helpful helpfulness={props.question.question_helpfulness} />
        <AddAnswer />
    </span>
  </div>
)

export default QuestionList;
