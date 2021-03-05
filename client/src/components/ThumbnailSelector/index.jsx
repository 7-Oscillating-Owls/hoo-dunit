import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailSelector.css';

const ThumbnailSelector = ({ currentImage }) => (
  <div>
    <img className={styles.currentImage} src={currentImage} alt="displayImage" />
  </div>
);

ThumbnailSelector.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default ThumbnailSelector;
