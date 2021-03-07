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
  const defaultStyle = productStyles[0];

  if (defaultStyle.sale_price !== null) {
    productPrice = defaultStyle.sale_price;
    priceStyle = styles.salePrice;
    secondPriceEle = (<span className={styles.strikePrice}>{`$${defaultStyle.original_price}`}</span>);
  } else {
    productPrice = defaultStyle.original_price;
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
      <img
        className={styles.productImage}
        src={defaultStyle.photos[0].url}
        alt={`${defaultStyle.name} ${description}`}
      />
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
