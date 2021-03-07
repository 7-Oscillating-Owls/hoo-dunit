import React from 'react';
import styles from './Overview.css';
import dummyData from '../../../../data/styles';
import productInfo from '../../../../data/productInfo';
import ImageGallery from '../ImageGallery';
import ProductInformation from '../ProductInformation';
import ProductDescription from '../ProductDescription';
import Cart from '../Cart';
import StyleSelector from '../StyleSelector';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allStyles: dummyData.results,
      selectedStyleId: 0,
    };

    this.getSelectedStyleId = this.getSelectedStyleId.bind(this);
  }

  getSelectedStyleId(selectedStyleId) {
    this.setState({
      selectedStyleId,
    });
  }

  render() {
    const { allStyles, selectedStyleId } = this.state;
    const { starRating } = this.props;
    let filteredStyle;
    
    allStyles.forEach((style) => {
      if (selectedStyleId && style.style_id === selectedStyleId) {
        filteredStyle = style;
      } else if (style['default?'] === true) {
        filteredStyle = style;
      }
    });

    return (
      <div className={styles.overview}>
        <ImageGallery images={filteredStyle.photos} />
        <ProductInformation
          productInfo={productInfo}
          originalPrice={filteredStyle.original_price}
          salePrice={filteredStyle.sale_price}
          starRating={starRating}
        />
        <StyleSelector
          allStyles={allStyles}
          getSelectedStyleId={this.getSelectedStyleId}
        />
        <Cart
          skus={filteredStyle.skus}
          styleId={selectedStyleId}
        />
        <ProductDescription
          description={productInfo.description}
          features={productInfo.features}
          slogan={productInfo.slogan}
        />
      </div>
    );
  }
}

export default Overview;
