import React from 'react';
import styles from './Question.css';
import QuestionList from '../QuestionList'

const Question = (props) => (
  <div>
  {props.data.slice(0,1).map((question) => {
      return <QuestionList
        question={question.question_body}
    />
  })}
  </div>
);

export default Question;
