import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleSelector.css';

const StyleSelector = ({ images }) => (
  <div className={styles.container}>
    {images.map((item) => (
      <div key={item.url}>
        <img className={styles.item} src={item.thumbnail_url} alt="thumbnail" />
      </div>
    ))}
  </div>
);

StyleSelector.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StyleSelector;
