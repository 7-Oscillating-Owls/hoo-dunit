import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Overview.css';
import ImageGallery from '../ImageGallery';
import ProductInformation from '../ProductInformation';
import ProductDescription from '../ProductDescription';
import Cart from '../Cart';
import StyleSelector from '../StyleSelector';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      name: '',
      slogan: '',
      description: '',
      selectedStyleId: 0,
      features: [],
      data: [],
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
          category: res.data.category,
          name: res.data.name,
          slogan: res.data.slogan,
          description: res.data.description,
          features: res.data.features,
          data: res.data.styles,
        });
      });
  }

  render() {
    const {
      category, name, slogan, description, features, data, selectedStyleId,
    } = this.state;
    let filteredStyle;
    data.forEach((style) => {
      if (selectedStyleId && style.style_id === selectedStyleId) {
        filteredStyle = style;
      } if (style['default?'] === true) {
        filteredStyle = style;
      }
    });

    return (
      <>
        {filteredStyle
          && (
            <div className={styles.overview}>
              <ImageGallery images={filteredStyle.photos} />
              <ProductInformation
                category={category}
                name={name}
                originalPrice={filteredStyle.original_price}
                salePrice={filteredStyle.sale_price}
              />
              <StyleSelector
                allStyles={data}
                getSelectedStyleId={this.getSelectedStyleId}
              />
              <Cart
                skus={filteredStyle.skus}
                styleId={selectedStyleId}
              />
              <ProductDescription
                description={description}
                features={features}
                slogan={slogan}
              />
            </div>
          )}
      </>
    );
  }
}

Overview.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Overview;
