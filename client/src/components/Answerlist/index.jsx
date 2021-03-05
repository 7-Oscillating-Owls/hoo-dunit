import React from 'react'
import styles from './Answerlist.css';
import Answer from '../Answer';
const token = require('../../../../token.js')
const axios = require('axios')

class Answerlist extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      answers: []
    }
  }

  componentDidMount(){
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=14931&question_id=84310/answers', {
    headers: {
      'Authorization' : token
    }
  })
    .then((res) => {
      this.setState({answers: res.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
    <div>hello</div>
    )
  }
}

export default Answerlist;
