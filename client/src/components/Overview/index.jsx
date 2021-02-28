import React from 'react';
import styles from './Overview.css';

const Overview = () => (
  <div className={styles.overview}>
    <div className={styles.imageGallery}>Image Gallery</div>
    <div className={styles.productInformation}>Product information</div>
    <div className={styles.styleSelector}>Style Selector</div>
    <div className={styles.addToCart}>Add to Cart</div>
    <div className={styles.productDescription}>Product Description</div>
  </div>
);

export default Overview;
