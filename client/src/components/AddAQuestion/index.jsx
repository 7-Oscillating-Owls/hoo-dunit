import React from 'react';
import QuestionModal from '../QuestionModal';
class AddAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div>
        <button className="questionButton" type="button">ADD A QUESTION + </button>
        {this.state.showModal ? <QuestionModal /> : null}
      </div>
    );
  }
}

export default AddAQuestion;
