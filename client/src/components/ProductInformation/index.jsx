import React from 'react';
import PropTypes from 'prop-types';
import ReviewsAverageOverviewStars from '../ReviewsAverageOverviewStars';
import styles from './ProductInformation.css';

const ProductInformation = (props) => {
  const {
    category,
    name,
    styleName,
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
      <span className={styles.originalPrice}>
        {originalPrice}
        {' '}
      </span>
      <span className={styles.salePrice}>
        $
        {salePrice}
      </span>
    </div>
  );

  return (
    <div className={styles.productInformation}>
      <div className={styles.ratings}>
        <ReviewsAverageOverviewStars starRating={starRating} />
        <div className={styles.reviewsText}><a href="index.reviewsList">Read All Reviews</a></div>
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.name}>{name}</div>
      <div>{styleName}</div>
      {currentPrice}
      <div className={styles.discount}>This product is excluded from all promotional discounts and offers</div>
    </div>
  );
};

ProductInformation.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.number,
  starRating: PropTypes.number.isRequired,
};

ProductInformation.defaultProps = {
  salePrice: PropTypes.number,
};

export default ProductInformation;
