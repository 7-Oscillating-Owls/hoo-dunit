import React from 'react';
import PropTypes from 'prop-types';

import RelatedProductCard from '../RelatedProductCard';

import styles from './RelatedProductsList.css';

const RelatedProductsList = ({ relatedProducts, stylesByProductId }) => {
  const cardsComponenets = relatedProducts.map(({
    id,
    description,
    name,
    category,
    features,
  }) => (
    <RelatedProductCard
      key={id}
      id={id}
      description={description}
      name={name}
      category={category}
      features={features}
      defaultStyle={stylesByProductId[id][0]}
    />
  ));

  return (
    <div className={styles.relatedProductsList}>
      <div className={styles.leftArrowSpacer} />
      {cardsComponenets}
      <div className={styles.rightArrowSpacer} />
    </div>
  );
};

RelatedProductsList.propTypes = {
  relatedProducts: PropTypes.arrayOf().isRequired,
  stylesByProductId: PropTypes.objectOf().isRequired,
};

export default RelatedProductsList;
