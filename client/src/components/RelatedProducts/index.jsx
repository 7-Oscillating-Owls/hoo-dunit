import React from 'react';

import RelatedProductsList from '../RelatedProductsList';
import {
  relatedProductsDetails,
  stylesByProductId,
} from '../../../../data/products';

import styles from './RelatedProducts.css';

const RelatedProducts = () => (
  <section className={styles.relatedProducts}>
    <h3 className={styles.listTitle}>Related Products</h3>
    <RelatedProductsList
      relatedProducts={relatedProductsDetails}
      stylesByProductId={stylesByProductId}
    />

    <h3 className={styles.listTitle}>Your Outfit</h3>
    <RelatedProductsList
      relatedProducts={relatedProductsDetails}
      stylesByProductId={stylesByProductId}
    />
  </section>
);

export default RelatedProducts;
