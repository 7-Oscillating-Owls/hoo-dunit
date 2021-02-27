import React from 'react';

import RelatedProductsList from '../RelatedProductsList';

import styles from './RelatedProducts.css';

const RelatedProducts = () => (
  <section className={styles.relatedProducts}>
    <RelatedProductsList />
    <RelatedProductsList />
  </section>
);

export default RelatedProducts;
