import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import styles from './RelatedProductCard.css';

const RelatedProductCard = ({
  product,
  children,
}) => {
  let productPrice;
  let priceStyle;
  let secondPriceEle;
  const {
    id,
    name,
    category,
    description,
    styles: productStyles,
  } = product;

  const cardInfo = (() => ({
    photo: productStyles && productStyles[0].photos[0].url,
    salePrice: productStyles && productStyles[0].sale_price,
    originalPrice: productStyles && productStyles[0].original_price,
  }))();

  if (cardInfo.salePrice !== null) {
    productPrice = cardInfo.salePrice;
    priceStyle = styles.salePrice;
    secondPriceEle = (<span className={styles.strikePrice}>{`$${cardInfo.originalPrice}`}</span>);
  } else {
    productPrice = cardInfo.originalPrice;
  }

  const priceEle = (
    <div className={styles.productPrice}>
      <span className={priceStyle}>{`$${productPrice} `}</span>
      {secondPriceEle}
    </div>
  );

  return (
    <article className={styles.relatedProductCard}>
      {children}
      {
        cardInfo.photo
        && (
          <img
            className={styles.productImage}
            src={cardInfo.photo}
            alt={`${name} ${description}`}
          />
        )
      }
      <div className={styles.productCategory}>{category}</div>
      <div className={styles.productName}><Link to={`/products/${id}`} className={styles.productLink}>{name}</Link></div>
      {priceEle}
      <div className={styles.starRating}>Star Ratings</div>
    </article>
  );
};

RelatedProductCard.propTypes = {
  children: PropTypes.element.isRequired, // actionButton expected
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    styles: PropTypes.arrayOf(PropTypes.shape({
      original_price: PropTypes.string,
      sales_price: PropTypes.string,
      photos: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
      })),
      name: PropTypes.string,
    })),
  }).isRequired,
};

export default RelatedProductCard;
