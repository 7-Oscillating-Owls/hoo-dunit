import React from 'react';

import RelatedProductsList from '../RelatedProductsList';
import ActionButtonCompare from '../ActionButtonCompare';
import ActionButtonRemove from '../ActionButtonRemove';
import AppModal from '../AppModal';
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
        actionType="compare"
      />

      <h3 className={styles.listTitle}>Your Outfit</h3>
      <RelatedProductsList
        relatedProducts={relatedProductsDetails}
        stylesByProductId={getStylesForProduct}
        actionType="outfit"
      />

      <AppModal>
        <div>Hello</div>
      </AppModal>

    </section>
  );
};

export default RelatedProducts;
