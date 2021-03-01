import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const ProductInformation = ({ productInfo, originalPrice, salePrice }) => {
  const currentPrice = salePrice === null ? originalPrice
    : (
      <span className={styles.originalPrice}>
        {originalPrice}
      </span>
    );

  return (
    <div className={styles.productInfo}>
      <div className={styles.ratings}>Star Ratings</div>
      <div className={styles.category}>{productInfo.category}</div>
      <div className={styles.name}>{productInfo.name}</div>
      <div className={styles.salePrice}>
        $
        {salePrice}
      </div>
      <div className={styles.price}>
        $
        {currentPrice}
      </div>
    </div>
  );
};

ProductInformation.propTypes = {
  productInfo: PropTypes.objectOf(PropTypes.number).isRequired,
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.number.isRequired,
};

export default ProductInformation;
