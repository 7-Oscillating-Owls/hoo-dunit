import React from 'react';
import Answer from '../Answer';
import LoadMoreAnswers from '../LoadMoreAnswers';
import AnswerMore from '../AnswerMore';
import styles from './Answerlisttwo.css';

const axios = require('axios');

class Answerlisttwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerstwo: [],
      isLoadMore: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    axios.get('/answers')
      .then(response => {
        this.setState({ answerstwo: response.data });
      });
  }

  onButtonClick() {
    this.setState({ isLoadMore: true });
  }

  render() {
    let answertwocomponents;
    if (this.state.answerstwo['results']) {
      answertwocomponents = this.state.answerstwo['results'].slice(3, 4).map((answer) => {
        return (
          <span>
            <Answer answer={answer} key={answer.answer_id} />
            <LoadMoreAnswers
            click={this.onButtonClick}
             />
            {this.state.isLoadMore ? <AnswerMore
            loadmore = {this.state.isLoadMore}
            data ={this.state.answerstwo} /> : null }
          </span>
        )
      });
    }
    return (
      <div className={styles.answerlisttwo}>
        {answertwocomponents}
      </div>
    );
  }
}

export default Answerlisttwo;
