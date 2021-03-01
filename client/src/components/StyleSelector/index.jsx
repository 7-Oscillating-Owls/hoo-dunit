import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleSelector.css';

const StyleSelector = ({ allStyles }) => (
  <div className={styles.container}>
    {allStyles.map((style) => (
      <div key={style.photos[0].url}>
        <img className={styles.item} src={style.photos[0].thumbnail_url} alt="thumbnail" />
      </div>
    ))}
  </div>
);

StyleSelector.propTypes = {
  allStyles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StyleSelector;
