import React from 'react';
import styles from './StyleSelector.css';

const StyleSelector = ({ images }) => (
  <div className={styles.container}>
    {images.map((item) => (
      <div>
        <img className={styles.item} src={item.thumbnail_url} alt="test" />
      </div>
    ))}
  </div>
);

export default StyleSelector;
