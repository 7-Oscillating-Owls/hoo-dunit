import React from 'react';

import RelatedProductsList from '../RelatedProductsList';
import ActionButtonCompare from '../ActionButtonCompare';
import ActionButtonRemove from '../ActionButtonRemove';
import {
  // getProducts,
  getDetailForProduct,
  getRelatedProducts,
  // relatedProductsDetails,
  getStylesForProduct,
} from '../../../../data/products';

import styles from './RelatedProducts.css';

const RelatedProducts = () => {
  const productId = '14807';
  const relatedProductIds = getRelatedProducts(productId);
  const relatedProductsDetails = relatedProductIds.map((id) => getDetailForProduct(id));

  return (
    <section className={styles.relatedProducts}>
      <h3 className={styles.listTitle}>Related Products</h3>
      <RelatedProductsList
        relatedProducts={relatedProductsDetails}
        stylesByProductId={getStylesForProduct}
        ActionButton={ActionButtonCompare}
      />

      <h3 className={styles.listTitle}>Your Outfit</h3>
      <RelatedProductsList
        relatedProducts={relatedProductsDetails}
        stylesByProductId={getStylesForProduct}
        ActionButton={ActionButtonRemove}
      />
    </section>
  );
};

export default RelatedProducts;
