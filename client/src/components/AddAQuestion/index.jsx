import React from 'react';
import QuestionModal from '../QuestionModal';

class AddAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({showModal: true });
  }

  handleModalClose () {
    this.setState({showModal: false});
  }

  render() {
    return (

      <div>
        <button
          className="questionButton"
          type="button"
          onClick={this.handleClick}
        >
          ADD A QUESTION +
        </button>
        {this.state.showModal ? <QuestionModal modalclose={this.handleModalClose}/> : null}
      </div>
    );
  }
}

export default AddAQuestion;
