import React from 'react';
import styles from './Overview.css';
import dummyData from '../../../../data/styles';
import productInfo from '../../../../data/productInfo';
import ImageGallery from '../ImageGallery';
import ProductInformation from '../ProductInformation';
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
    let originalPrice;
    let salePrice;

    allStyles.forEach((style) => {
      if (style['default?'] === true) {
        images = style.photos;
        stockKeepingUnit = style.skus;
        originalPrice = style.original_price;
        salePrice = style.sale_price;
      }
    });

    return (
      <div className={styles.overview}>
        <div className={styles.imageGallery}><ImageGallery images={images} /></div>
        <div className={styles.productInformation}>
          <ProductInformation
            productInfo={productInfo}
            originalPrice={originalPrice}
            salePrice={salePrice}
          />
        </div>
        <div className={styles.styleSelector}>Style Selector</div>
        <div className={styles.addToCart}><Cart skus={stockKeepingUnit} /></div>
        <div className={styles.productDescription}>Product Description</div>
      </div>
    );
  }
}

export default Overview;
