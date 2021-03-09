import React from 'react';
import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';
import styles from './ProductDescription.css';

const ProductDescription = ({ description, features, slogan }) => (
  <div className={styles.productDescription}>
    <div className={styles.details}>
      <h3>{slogan}</h3>
      <div className={styles.paragraph}>{description}</div>
    </div>
    <div className={styles.features}>
      {features.map((feature) => (
        <div className={styles.feature} key={feature.value}>
          <div className={styles.checkMark}>
            <BsCheck size={15} /> {feature.value}
          </div>
        </div>
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
