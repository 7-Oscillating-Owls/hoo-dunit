import React from 'react';
import axios from 'axios';
import styles from './QuestionsAndAnswers.css';
import Question from '../Question';
import QATitle from '../QATitle';
import AddAQuestion from '../AddAQuestion';
import SearchBar from '../SearchBar';
import MoreAnsweredQuestions from '../MoreAnsweredQuestions';
import Questiontwo from '../Questiontwo';
import Answerlist from '../Answerlist';
import Answerlisttwo from '../Answerlisttwo';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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
        <div className={styles.questionone}>
          <Question data={data} />
          <Answerlist />
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
