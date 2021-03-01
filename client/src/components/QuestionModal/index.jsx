import React from 'react'

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: ''

    };
  }

  render() {
    return (
      <form className="questionModalForm">
        <input
          type="text"
          value="question"
          placeholder="Enter your question"
        />
        <input
          type="text"
          value='nickname'
          placeholder="Example: jackson11!"
        />
      </form>

    );
  }
}

export default QuestionModal;
