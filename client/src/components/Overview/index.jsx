import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
      data: [],
      allStyles: dummyData.results,
      selectedStyleId: 0,

    };

    this.fetchAllStyles = this.fetchAllStyles.bind(this);
    this.getSelectedStyleId = this.getSelectedStyleId.bind(this);
  }

  componentDidMount() {
    this.fetchAllStyles();
  }

  componentDidUpdate(prev) {
    const { productId } = this.props;
    if (prev.productId !== productId) {
      this.fetchAllStyles();
    }
  }

  getSelectedStyleId(selectedStyleId) {
    this.setState({
      selectedStyleId,
    });
  }

  fetchAllStyles() {
    const { productId } = this.props;

    axios.get(`/api/products/${productId}`)
      .then((res) => {
        this.setState({
          data: res.data.styles,
        });
      });
  }

  render() {
    const { data, allStyles, selectedStyleId } = this.state;
    const filteredStyle = allStyles.filter((style) => {
      if (selectedStyleId && style.style_id === selectedStyleId) {
        return style;
      } if (style['default?'] === true) {
        return style;
      }
    });

    return (
      <div className={styles.overview}>
        <ImageGallery images={filteredStyle[0].photos} />
        <ProductInformation
          productInfo={productInfo}
          originalPrice={filteredStyle[0].original_price}
          salePrice={filteredStyle[0].sale_price}
        />
        <StyleSelector
          allStyles={allStyles}
          getSelectedStyleId={this.getSelectedStyleId}
        />
        <Cart
          skus={filteredStyle[0].skus}
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

Overview.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Overview;
