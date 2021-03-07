import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProductsList from '../RelatedProductsList';
import styles from './RelatedProducts.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: [],
      outfitProducts: [],
    };
  }

  componentDidMount() {
    this.fetchRelatedProducts();
  }

  componentDidUpdate(prev) {
    const { productId } = this.props;
    if (prev.productId !== productId) {
      this.fetchRelatedProducts();
    }
  }

  fetchRelatedProducts() {
    const { productId } = this.props;

    if (productId) {
      axios.get(`/api/products/${productId}/related`)
        .then((response) => {
          this.setState({
            relatedProducts: response.data,
          });
        })
        .catch(() => {
          console.warn('failed to fetch related products');
          this.setState({
            relatedProducts: [],
          });
        });
    }
  }

  render() {
    const { relatedProducts } = this.state;

    return (
      <section className={styles.relatedProducts}>
        <h3 className={styles.listTitle}>Related Products</h3>
        <RelatedProductsList
          relatedProducts={relatedProducts}
          actionType="compare"
        />

        <h3 className={styles.listTitle}>Your Outfit</h3>
        <RelatedProductsList
          relatedProducts={relatedProducts}
          actionType="outfit"
        />
      </section>
    );
  }
}

RelatedProducts.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default RelatedProducts;
