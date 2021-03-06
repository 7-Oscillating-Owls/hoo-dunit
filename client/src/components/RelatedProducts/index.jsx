import React from 'react';

import RelatedProductsList from '../RelatedProductsList';
import {
  // getProducts,
  getDetailForProduct,
  getRelatedProducts,
  // relatedProductsDetails,
  getStylesForProduct,
} from '../../../../data/products';
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
    const { productId } = this.props;
    // fetch data using productId
  }

  render() {
    let { productId } = this.props;
    console.log('relatedProducts: ', productId);
    productId = '14807';
    const relatedProductIds = getRelatedProducts(productId);
    const relatedProductsDetails = relatedProductIds.map((id) => getDetailForProduct(id));

    return (
      <section className={styles.relatedProducts}>
        <h3 className={styles.listTitle}>Related Products</h3>
        <RelatedProductsList
          relatedProducts={relatedProductsDetails}
          stylesByProductId={getStylesForProduct}
          actionType="compare"
        />

        <h3 className={styles.listTitle}>Your Outfit</h3>
        <RelatedProductsList
          relatedProducts={relatedProductsDetails}
          stylesByProductId={getStylesForProduct}
          actionType="outfit"
        />
      </section>
    );
  }
};

export default RelatedProducts;
