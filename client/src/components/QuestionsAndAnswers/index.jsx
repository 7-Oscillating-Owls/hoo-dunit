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
import SearchBar from '../SearchBar';
import MoreAnsweredQuestions from '../MoreAnsweredQuestions';
import Questiontwo from '../Questiontwo';
import Answerlist from '../Answerlist';
import Answerlisttwo from '../Answerlisttwo';

import axios from 'axios'

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []

    }
  }

  componentDidMount() {
    axios.get('/qa')
      .then(response => {
        this.setState({ data: response.data.results });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <QATitle />
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <div>
          <Question data={data} />
          <Answerlist />
        </div>
        <div>
          <Questiontwo data={data} />
          <Answerlisttwo />
        </div>
        <div className={styles.button}>
          <MoreAnsweredQuestions />
          <AddAQuestion />
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
