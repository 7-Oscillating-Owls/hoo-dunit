import React from 'react';

class AddAQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  render() {
    return (
      <div>
        <button className="questionButton" type="button">ADD A QUESTION + </button>

      </div>
    );
  }
}

export default AddAQuestion;
