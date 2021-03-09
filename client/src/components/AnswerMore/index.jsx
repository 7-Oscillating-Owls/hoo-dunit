import React from 'react';
import Answer from '../Answer';

const AnswerMore = (props) => (
  <div>
    {props.data.['results'].slice(4).map((answer, index) => {
      return <Answer answer={answer} key={answer.answer_id} />
    })}
  </div>
);

export default AnswerMore;
