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
import AddAQuestion from '../AddAQuestion';
import QuestionModal from '../QuestionModal';
import SearchBar from '../SearchBar';

const QuestionsAndAnswers = () => (
  <div>
  <QATitle />
  <div className={styles.searchContainer}>
    <SearchBar />
  </div>
  <div className={styles.questionContainer}>
    <Question />
    <div className={styles.helpfulContainer}>
      <Helpful />
      <AddAnswer />
    </div>
  </div>
  </div>

);

export default QuestionsAndAnswers;
