import React from 'react';
import PropTypes from 'prop-types';
import AppModal from '../AppModal';

import styles from './ActionButtonCompare.css';

class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showThing: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { showThing } = this.state;
    this.setState({
      showThing: !showThing,
    });
  }

  render() {
    const { showThing } = this.state;
    const { close } = this.props;

    return (
      <div className={styles.test2}>
        <button type="button" onClick={this.toggle}>Toggle</button>
        {
          showThing
          && (<div>The thing!</div>)
        }
        <button
          type="button"
          onClick={close}
        >
          Click Me
        </button>
      </div>
    );
  }
}

const ActionButtonCompare = ({ productId }) => (
  <button type="button" className={styles.comparisonButton} onClick={() => AppModal.open(() => (<Test2 close={AppModal.close} />))}>
    *
  </button>
);

ActionButtonCompare.propTypes = {
  productId: PropTypes.number.isRequired,
};
export default ActionButtonCompare;
