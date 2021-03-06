import React from 'react';
import Helpful from '../Helpful';
import Report from '../Report';
import styles from './Answer.css';

const Answer = (props) => {

    return (
      <div className={styles.answer}>
        <h4>A: {props.answer.body}</h4>
        <div className={styles.footer}>
          <small>by {props.answer.answerer_name}  |</small>

        <small><Helpful helpfulness={props.answer.helpfulness} /></small>
        |
        <small><Report answer={props.answer} /></small>
        </div>
      </div>
    );

    }

export default Answer;
