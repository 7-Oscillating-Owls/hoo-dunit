import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './AppModal.css';

let modalRoot;

class AppModal extends React.Component {
  constructor(props) {
    super(props);

    if (!modalRoot && window.document) {
      modalRoot = window.document.getElementById('modal-root');
    }
  }

  render() {
    const { children, outsideClickHandler } = this.props;

    return ReactDOM.createPortal(
      (
        <div className={styles.appModal} onClick={outsideClickHandler}>
          <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      ),
      modalRoot,
    );
  }
}

AppModal.defaultProps = {
  children: undefined,
  outsideClickHandler: () => console.warn('warning: outsideClickHandler prop should be defined on AppModal'),
};

AppModal.propTypes = {
  children: PropTypes.func,
  outsideClickHandler: PropTypes.func,
};

export default AppModal;
