import React from 'react';

import RelatedProductCard from '../RelatedProductCard';

import styles from './RelatedProductsList.css';

const RelatedProductsList = () => (
  <div className={styles.relatedProductsList}>
    <RelatedProductCard />
  </div>
);

export default RelatedProductsList;
