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
      this.setState({data: response.data.results})
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
    <QATitle />
    <div className={styles.searchContainer}>
      <SearchBar />
    </div>
    <div className={styles.questionContainer}>
      <Question data ={data} />
      <div className={styles.helpfulContainer}>
        <Helpful data={data}/>
        <AddAnswer />
      </div>
    </div>
    <div className={styles.answerContainer}>
      <Answer />
      <div className={styles.byUserContainer}>
        <ByUser />
        <AnswerHelpful />
        <Report />
      </div>
    </div>
    <div className={styles.questionContainer}>
      <Questiontwo data ={data}/>
      <div className={styles.helpfulContainer}>
        <Helpful />
        <AddAnswer />
      </div>
    </div>
    <div className={styles.answerContainer}>
      <Answer />
      <div className={styles.byUserContainer}>
        <ByUser />
        <AnswerHelpful />
        <Report />
      </div>
    </div>
    <LoadMoreAnswers />
    <div className={styles.buttonContainer}>
      <MoreAnsweredQuestions />
      <AddAQuestion />
    </div>
  </div>
    )
  }
}




export default QuestionsAndAnswers;
