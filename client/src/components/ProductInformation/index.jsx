import React from 'react';
import styles from './styles.css'

const ProductInformation = () => (
  <div className={styles.productInfo}>
    <div className={styles.ratings}>Star Ratings</div>
    <div className={styles.category}>Category</div>
    <div className={styles.name}>Name</div>
    <div className={styles.price}>Price</div>
  </div>
);

export default ProductInformation;
