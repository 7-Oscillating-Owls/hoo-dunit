import React from 'react';
import Answer from '../Answer';
import styles from './Answerlisttwo.css';
const axios = require('axios')

class Answerlisttwo extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      answerstwo: []
    }
  }

  componentDidMount() {
    axios.get('/answers')
      .then(response => {
        this.setState({ answerstwo: response.data});
      });
    }

    render() {
      let answertwocomponents;
    if (this.state.answerstwo['results']) {

      answertwocomponents = this.state.answerstwo['results'].slice(3, 5).map((answer) => {

        return (
          <Answer answer={answer} key={answer.answer_id} />
        )
      });

    }
    return (
      <div className={styles.answerlisttwo}>
        {answertwocomponents}
      </div>
    )

  }
}


export default Answerlisttwo;


