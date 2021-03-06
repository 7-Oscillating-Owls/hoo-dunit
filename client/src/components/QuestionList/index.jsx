import React from 'react';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';
import styles from './QuestionList.css';

const QuestionList = (props) => (
  <div className={styles.questionlist}>
    <h4>Q: {props.question.question_body}</h4>
    <Helpful />
    <AddAnswer />
  </div>
)

export default QuestionList;
