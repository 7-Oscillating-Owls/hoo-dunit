import React from 'react';
import styles from './QuestionsAndAnswers.css';
import Question from '../Question';

const QuestionsAndAnswers = () => (
  <div className={styles.qa}>
    <div className={styles.searchBar}>SearchBar</div>
    <div className={styles.qaContainer}>
      <div className={styles.questionList}><Question /></div>
      <div className={styles.answerList}>AnswerList</div>
    </div>
    <div className={styles.buttonContainer}>
      <div className={styles.moreAnsweredQuestionsButton}>More Answered Questions</div>
      <div className={styles.addAQuestionButton}>Add A Question</div>
    </div>
  </div>
);

export default QuestionsAndAnswers;
