import React from 'react';
import styles from './QuestionsAndAnswers.css';
import Question from '../Question';
import Answer from '../Answer';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';

import AnswerHelpful from '../AnswerHelpful';
import ByUser from '../ByUser';


const QuestionsAndAnswers = () => (
  <div className={styles.qa}>
    <div className={styles.searchBar}>SearchBar</div>
    <div className={styles.helpful}><Helpful /></div>
    <div className={styles.addanswer}><AddAnswer /></div>
    <div className={styles.qaContainer}>
      <div className={styles.questionList}><Question /></div>
      <div className={styles.byuser}><ByUser /></div>
      <div className={styles.answerList}><Answer /></div>
      <div className={styles.answerhelpful}><AnswerHelpful /></div>
    </div>
    <div className={styles.buttonContainer}>
      <div className={styles.moreAnsweredQuestionsButton}>More Answered Questions</div>
      <div className={styles.addAQuestionButton}>Add A Question</div>
    </div>
  </div>
);

export default QuestionsAndAnswers;
