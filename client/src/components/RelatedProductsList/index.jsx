import React from 'react';
// import PropTypes from 'prop-types';

import RelatedProductCard from '../RelatedProductCard';

import styles from './RelatedProductsList.css';

// the linting errors occuring are because of the mock data we're using
// its much too complex of an object to spell out in prop types rn so im disabling
// the linter temporarily
// eslint-disable-next-line react/prop-types
const RelatedProductsList = ({ relatedProducts, stylesByProductId }) => {
  // eslint-disable-next-line react/prop-types
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

// RelatedProductsList.propTypes = {
//   relatedProducts: PropTypes.arrayOf().isRequired,
//   stylesByProductId: PropTypes.objectOf().isRequired,
// };

export default RelatedProductsList;
