import React from 'react';
import styles from './Overview.css';
import dummyData from '../../../../data/styles';
import ImageGallery from '../ImageGallery';
import Cart from '../Cart';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allStyles: dummyData.results,
    };
  }

  render() {
    const { allStyles } = this.state;
    let images;
    let stockKeepingUnit;
    allStyles.forEach((style) => {
      if (style['default?'] === true) {
        images = style.photos;
        stockKeepingUnit = style.skus;
      }
    });

    return (
      <div className={styles.overview}>
        <div className={styles.imageGallery}><ImageGallery images={images} /></div>
        <div className={styles.productInformation}>Product information</div>
        <div className={styles.styleSelector}>Style Selector</div>
        <div className={styles.addToCart}><Cart skus={stockKeepingUnit} /></div>
        <div className={styles.productDescription}>Product Description</div>
      </div>
    );
  }
}

export default Overview;
