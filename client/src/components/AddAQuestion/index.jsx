import React from 'react';

class AddAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <button className="questionButton" type="button">ADD A QUESTION + </button>
    );
  }
}

export default AddAQuestion;
