import React from 'react';

import styles from './ComparisonButton.css';

const ComparisonButton = ({ productId }) => (
  <button type="button" className={styles.comparisonButton} onClick={() => console.log(productId)}>
    *
  </button>
);

export default ComparisonButton;
