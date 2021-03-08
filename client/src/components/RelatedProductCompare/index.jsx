import React from 'react';
import PropTypes from 'prop-types';
import { FcCheckmark } from 'react-icons/fc';

import css from './RelatedProductCompare.css';

const featureAccumulator = (acc, current) => {
  acc[current.feature] = current.value;
  return acc;
};

const RelatedProductCompare = ({ product, relatedProduct }) => {
  const productFeatures = product.features.reduce(featureAccumulator, {});
  const relatedFeatures = relatedProduct.features.reduce(featureAccumulator, {});
  const allFeatures = {
    ...productFeatures,
    ...relatedFeatures,
  };
  const featureEles = [];

  featureEles.push(
    (
      <div className={css.headers}>
        <div className={css.productName}>{product.name}</div>
        <div className={css.featureName} />
        <div className={css.productName}>{relatedProduct.name}</div>
      </div>
    ),
  );

  const features = Object.keys(allFeatures);

  features.forEach((key) => {
    const productFeatureScore = productFeatures[key] !== undefined ? <FcCheckmark /> : '';
    const relatedFeatureScore = relatedFeatures[key] !== undefined ? <FcCheckmark /> : '';

    featureEles.push(
      (
        <div className={css.featureRow}>
          <div className={css.featureScore}>{productFeatureScore}</div>
          <div className={css.featureName}>{key}</div>
          <div className={css.featureScore}>{relatedFeatureScore}</div>
        </div>
      ),
    );
  });

  return (
    <div className={css.comparisonModal}>
      <h2 className={css.title}>Comparing</h2>

      <div className={css.featureContainer}>
        {featureEles}
      </div>
    </div>
  );
};

const productShape = PropTypes.shape({
  name: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    value: PropTypes.string,
  })),
});

RelatedProductCompare.defaultProps = {
  product: {
    id: 0,
    name: '',
    features: [],
  },
  relatedProduct: {
    id: 0,
    name: '',
    features: [],
  },
};

RelatedProductCompare.propTypes = {
  product: productShape,
  relatedProduct: productShape,
};

export default RelatedProductCompare;
