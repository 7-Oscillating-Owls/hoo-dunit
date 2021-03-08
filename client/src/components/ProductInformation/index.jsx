import React from 'react';
import PropTypes from 'prop-types';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import styles from './ProductInformation.css';

const ProductInformation = ({ productInfo, originalPrice, salePrice, starRating }) => {
  const currentPrice = salePrice === null ? (
    <div className={styles.price}>
      $
      {originalPrice}
    </div>
  ) : (
    <div>
      <div className={styles.salePrice}>
        $
        {salePrice}
      </div>
      <div className={styles.originalPrice}>
        {originalPrice}
      </div>
    </div>
  );

  return (
    <div className={styles.productInformation}>
      <div className={styles.ratings}>
        <span><ReviewsAverageOverviewStars ratings={starRating} /> </span>
        <u>Read All Reviews</u>
      </div>
      <div className={styles.category}>{productInfo.category}</div>
      <div className={styles.name}>{productInfo.name}</div>
      {currentPrice}
    </div>
  );
};

ProductInformation.propTypes = {
  productInfo: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
};

ProductInformation.defaultProps = {
  salePrice: PropTypes.string,
};

export default ProductInformation;
