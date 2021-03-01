import React from 'react';
import styles from './QuestionsAndAnswers.css';
import Question from '../Question';
import Answer from '../Answer';
import Helpful from '../Helpful';
import AddAnswer from '../AddAnswer';
import AnswerHelpful from '../AnswerHelpful';
import ByUser from '../ByUser';
import Report from '../Report';
import LoadMoreAnswers from '../LoadMoreAnswers';
import QATitle from '../QATitle';

const QuestionsAndAnswers = () => (

  <div className={styles.qa}>
    <div classNames={styles.qatitle}><QATitle /></div>
    <div className={styles.searchBar}>SearchBar</div>

    <div className={styles.qaContainer}>
      <div className={styles.questionList}>
        <Question />
        <div className={styles.helpful}><Helpful /></div>
        <div className={styles.addanswer}><AddAnswer /></div>
      </div>
      <div className={styles.byuser}><ByUser /></div>
      <div className={styles.answerList}>
        <Answer />
        <div className={styles.answerhelpful}><AnswerHelpful /></div>
        <div className={styles.report}><Report /></div>
      </div>
      <div className={styles.qaContainer}>
        <div className={styles.questionList}>
          <Question />
          <div className={styles.helpful}><Helpful /></div>
          <div className={styles.addanswer}><AddAnswer /></div>
        </div>
      </div>
      <div className={styles.answerList}>
        <Answer />
        <div className={styles.answerhelpful}><AnswerHelpful /></div>
        <div className={styles.report}><Report /></div>
      </div>
      <div className={styles.loadmoreanswers}><LoadMoreAnswers /></div>
    </div>
    <div className={styles.buttonContainer}>
      <div className={styles.moreAnsweredQuestionsButton}>More Answered Questions</div>
      <div className={styles.addAQuestionButton}>Add A Question</div>
    </div>
  </div>
);

export default QuestionsAndAnswers;
