import React from 'react';

import RelatedProductsList from '../RelatedProductsList';

import styles from './RelatedProducts.css';

const RelatedProducts = () => (
  <section className={styles.relatedProducts}>
    <h3 className={styles.listTitle}>Related Products</h3>
    <RelatedProductsList />
    <h3 className={styles.listTitle}>Your Outfit</h3>
    <RelatedProductsList />
  </section>
);

export default RelatedProducts;
