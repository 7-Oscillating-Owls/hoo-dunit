import React from 'react';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';
import styles from './QuestionList.css';

const QuestionList = (props) => (
  <div className={styles.questionlist}>
    <h4>Q: {props.question.question_body}</h4>
    <div className={styles.sidebar}>
      <Helpful helpfulness ={props.question.question_helpfulness} />
      <AddAnswer />
    </div>
  </div>
)

export default QuestionList;
