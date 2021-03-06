import React from 'react';
import styles from './Helpful.css';

const Helpful = (props) => (

  <small className={styles.helpful}>Helpful? <a>Yes</a>({props.helpfulness})</small>

);

export default Helpful;
