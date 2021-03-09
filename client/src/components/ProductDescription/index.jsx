import React from 'react';
import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';
import styles from './ProductDescription.css';

const ProductDescription = ({ description, features, slogan }) => (
  <div className={styles.productDescription}>
    <div>
      <h3>{slogan}</h3>
      <p className={styles.paragraph}>{description}</p>
    </div>
    <div className={styles.features}>
      {features.map((feature) => (
        <span className={styles.feature} key={feature.value}>
          <BsCheck size={15} />
          {feature.value}
        </span>
      ))}
    </div>
  </div>

);

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
  slogan: PropTypes.string.isRequired,
};

export default ProductDescription;
