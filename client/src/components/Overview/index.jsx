import React from 'react';
import styles from './Overview.css';
import dummyData from '../../../../data/styles';
import productInfo from '../../../../data/productInfo';
import ImageGallery from '../ImageGallery';
import ProductInformation from '../ProductInformation';

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
    allStyles.forEach((style) => {
      if (style['default?'] === true) {
        images = style.photos;
      }
    });

    return (
      <div className={styles.overview}>
        <div className={styles.imageGallery}><ImageGallery images={images} /></div>
        <div className={styles.productInformation}>
          <ProductInformation productInfo={productInfo} />
        </div>
        <div className={styles.styleSelector}>Style Selector</div>
        <div className={styles.addToCart}>Add to Cart</div>
        <div className={styles.productDescription}>Product Description</div>
      </div>
    );
  }
}

export default Overview;
