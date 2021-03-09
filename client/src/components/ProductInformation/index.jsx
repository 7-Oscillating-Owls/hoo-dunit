import React from 'react';
import PropTypes from 'prop-types';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import styles from './ProductInformation.css';

const ProductInformation = (props) => {
  const {
    category,
    name,
    originalPrice,
    salePrice,
    starRating,
  } = props;
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
        <span className={styles.star}>
          <ReviewsAverageOverviewStars starRating={starRating} />
          {' '}
        </span>
        <a href="index.reviewsList">Read All Reviews</a>
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.name}>{name}</div>
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
  salePrice: PropTypes.number,
};

ProductInformation.defaultProps = {
  salePrice: PropTypes.number,
};

export default ProductInformation;
