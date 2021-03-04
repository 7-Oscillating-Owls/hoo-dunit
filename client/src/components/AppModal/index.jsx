import React from 'react';
import ReactDOM from 'react-dom';

import styles from './AppModal.css';

const modalRoot = document.getElementById('modal-root');

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  open() {
    this.setState({
      showModal: true,
    });
  }

  close() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { children } = this.props;
    const { showModal } = this.state;

    const classList = [styles.appModal];
    if (!showModal) {
      classList.push(styles.hidden);
    }

    return ReactDOM.createPortal(
      (
        <div className={classList.join(' ')}>
          {children}
        </div>
      ),
      modalRoot,
    );
  }
}

export default AppModal;
