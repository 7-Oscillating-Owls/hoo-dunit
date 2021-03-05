import React from 'react';
import styles from './Questiontwo.css';
import QuestionListtwo from '../QuestionListtwo'

const Questiontwo = (props) => (
  <div>
  {props.data.slice(1,2).map((question, index) => {
      return <QuestionListtwo
        question={question.question_body}
        key={index}
    />
  })}
  </div>
);

export default Questiontwo;