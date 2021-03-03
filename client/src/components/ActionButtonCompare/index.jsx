import React from 'react';

import styles from './ActionButtonCompare.css';

const ActionButtonCompare = ({ productId }) => (
  <button type="button" className={styles.comparisonButton} onClick={() => console.log('compare: ', productId)}>
    *
  </button>
);

export default ActionButtonCompare;
