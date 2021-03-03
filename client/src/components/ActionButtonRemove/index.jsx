import React from 'react';
import PropTypes from 'prop-types';

import styles from './ActionButtonRemove.css';

const ActionButtonRemove = ({ productId }) => (
  <button type="button" className={styles.actionButtonRemove} onClick={() => console.log('remove from outfit :', productId)}>
    x
  </button>
);

ActionButtonRemove.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ActionButtonRemove;
