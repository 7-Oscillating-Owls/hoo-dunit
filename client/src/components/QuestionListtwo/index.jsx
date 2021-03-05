import React from 'react';
import Helpful from '../Helpful';

const QuestionListtwo = (props) => {
  return (
    <div >
      <h4>Q: {props.question}</h4>
      <Helpful data={props.data} />
    </div>
  )
}



export default QuestionListtwo;
