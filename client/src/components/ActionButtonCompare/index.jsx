import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionButtonCompare.css';

const ActionButtonCompare = ({ productId }) => (
  <button type="button" className={styles.comparisonButton} onClick={() => console.log('compare: ', productId)}>
    *
  </button>
);

ActionButtonCompare.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ActionButtonCompare;
