import React from 'react';
import styles from './QuestionMore.css';
import Questionlistthree from '../Questionlistthree';

const QuestionMore = (props) => (
  <div>
    {props.data.slice(2, 4).map((question, index) => {
      return <Questionlistthree
        question={question}
        key={question.question_id}
    />
  })}
  </div>
);

export default QuestionMore;
