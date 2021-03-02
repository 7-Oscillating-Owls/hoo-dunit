import React from 'react';
import PropTypes from 'prop-types';
import { BsCheck } from 'react-icons/bs';
import styles from './ProductDescription.css';

const ProductDescription = ({ description, features }) => (
  <div className={styles.productDescription}>
    <div>{description}</div>
    {features.map((feature) => (
      <div key={feature.value}>
        <BsCheck size={15} />
        {feature.value}
      </div>
    ))}

  </div>

);

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDescription;
