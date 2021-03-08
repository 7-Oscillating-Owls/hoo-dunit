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
import QuestionMore from '../QuestionMore';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isMore: false,
    };
    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  componentDidMount() {
    axios.get('/qa')
      .then(response => {
        this.setState({ data: response.data.results });
      });
  }

  handleMoreClick() {
    this.setState({ isMore: true });
  }

  render() {
    const { data, isMore } = this.state;
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
          {isMore ? <QuestionMore data={data} /> : null }
        </div>

        <div className={styles.button}>
          <MoreAnsweredQuestions click={this.handleMoreClick} />
          <AddAQuestion />
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
