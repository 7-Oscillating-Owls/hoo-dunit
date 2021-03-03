import React from 'react';

import styles from './ActionButtonRemove.css';

const ActionButtonCompare = ({ productId }) => (
  <button type="button" className={styles.actionButtonRemove} onClick={() => console.log('remove from outfit :', productId)}>
    x
  </button>
);

export default ActionButtonCompare;
