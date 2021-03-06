import React from 'react';
import styles from './Answerlist.css';
import Answer from '../Answer';
const axios = require ('axios');

class Answerlist extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      answers: []
    }
  }

  componentDidMount() {
    axios.get('/answers')
      .then(response => {
        this.setState({ answers: response.data.results })
      });
  }

  render() {

    let answercomponents;
    if (this.state.answers['results']) {

      answercomponents = this.state.answers['results'].slice(0, 2).map((answer) => {

        return (
          <Answer answer={answer} key={answer.answer_id} />
        )
      });

    }
    return (
      <div>
        {answercomponents}
      </div>
    )

  }
}


export default Answerlist;
