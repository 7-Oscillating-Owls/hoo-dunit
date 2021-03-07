import React from 'react';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';
import styles from './QuestionListtwo.css'

const QuestionListtwo = (props) => {
  return (
    <div className={styles.questionlisttwo}>
    <p>Q: {props.question.question_body}</p>
    <div className={styles.sidebar}>
      <Helpful helpfulness ={props.question.question_helpfulness} />
      <AddAnswer />
    </div>
  </div>
  )
}



export default QuestionListtwo;
