import React from 'react';

import styles from './RelatedProductCard.css';

const RelatedProductCard = () => (
  <article className={styles.relatedProductCard}>
    <img className={styles.productImage} alt="product preview" />
    <div className={styles.productCategory}>Category Name</div>
    <div className={styles.productName}>Product Name</div>
    <div className={styles.productPrice}>$200</div>
    <div className={styles.starRating}>Star Ratings</div>
  </article>
);

export default RelatedProductCard;
