import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Overview.css';
import ImageGallery from '../ImageGallery';
import ProductInformation from '../ProductInformation';
import ProductDescription from '../ProductDescription';
import Cart from '../Cart';
import StyleSelector from '../StyleSelector';
import { getAverageRating } from '../ReviewUtils';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      name: '',
      slogan: '',
      description: '',
      styleName: '',
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

  getSelectedStyleId(selectedStyleId, styleName) {
    this.setState({
      styleName,
      selectedStyleId,
    });
  }

  fetchAllStyles() {
    const { productId } = this.props;
    if (productId) {
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
        })
        .catch(() => {
          console.log('error retrieving styles data');
        });
    }
  }

  render() {
    const { metaObject } = this.props;
    const {
      category, name, slogan, description, styleName, features, data, selectedStyleId,
    } = this.state;
    let filteredStyle;
    data.forEach((style) => {
      if (selectedStyleId && style.style_id === selectedStyleId) {
        filteredStyle = style;
      } if (style['default?'] === true) {
        filteredStyle = style;
      }
    });

    const { starRating } = getAverageRating(metaObject);

    return (
      <>
        {filteredStyle
          && (
            <div className={styles.overview}>
              <ImageGallery
                images={filteredStyle.photos}
              />
              <ProductInformation
                category={category}
                name={name}
                styleName={styleName}
                originalPrice={filteredStyle.original_price}
                salePrice={filteredStyle.sale_price}
                starRating={starRating}
              />
              <StyleSelector
                allStyles={data}
                getSelectedStyleId={this.getSelectedStyleId}
              />
              <Cart
                skus={filteredStyle.skus}
                styleId={selectedStyleId}
                selectedUrl={filteredStyle.photos[0].url}
                name={name}
                styleName={styleName}
                originalPrice={filteredStyle.original_price}
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

Overview.defaultProps = {
  metaObject: {
    ratings: {},
  },
};

Overview.propTypes = {
  productId: PropTypes.string.isRequired,
  metaObject: PropTypes.shape({
    ratings: PropTypes.shape(),
  }),
};

export default Overview;
