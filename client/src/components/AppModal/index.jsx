import React from 'react';

import styles from './AppModal.css';

const warn = () => console.log('modal is not registered');

const modal = {
  open: warn,
  close: warn,
};

const registerModal = (ref) => {
  if (ref) {
    console.log('modal is registered');
    modal.open = ref.open;
    modal.close = ref.close;
  } else {
    modal.open = warn;
    modal.close = warn;
  }
};

class AppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(component) {
    console.log('modal open');
    this.setState({
      hidden: false,
      component,
    });
  }

  close() {
    console.log('modal close');
    this.setState({
      hidden: true,
    });
  }

  render() {
    const { hidden, component } = this.state;
    // eslint-disable-next-line react/prop-types
    const { renderContent } = this.props;
    const modalStyles = [styles.appModal];
    if (hidden) {
      modalStyles.push(styles.hidden);
    }

    const stopEventProp = (e) => {
      console.log('clicked inside modal. stopping event bubbling');
      e.stopPropagation();
    }

    return (
      <div className={modalStyles.join(' ')} onClick={this.close}>
        <div className={styles.inner} onClick={stopEventProp}>
          {
            component
            && component()
          }
        </div>
      </div>
    );
  }
}

export {
  registerModal,
  AppModal as AppModalInstance,
};
export default modal;
