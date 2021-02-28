import React from 'react';

import RelatedProductCard from '../RelatedProductCard';

import styles from './RelatedProductsList.css';

const RelatedProductsList = () => {
  const data = [0, 0, 0, 0, 0, 0];
  const cardsComponenets = data.map(() => (<RelatedProductCard />));
  return (
    <div className={styles.relatedProductsList}>
      <div className={styles.leftArrowSpacer} />
      {cardsComponenets}
      <div className={styles.rightArrowSpacer} />
    </div>
  );
};

export default RelatedProductsList;
