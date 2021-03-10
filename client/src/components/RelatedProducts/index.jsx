import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';

import AppModal from '../AppModal';
import RelatedProductsList from '../RelatedProductsList';
import RelatedProductCard from '../RelatedProductCard';
import RelatedProductCompare from '../RelatedProductCompare';
import styles from './RelatedProducts.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedProducts: [],
      showModal: false,
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

  setShowModal(shouldShowModal) {
    this.setState({
      showModal: !!shouldShowModal,
    });
  }

  compareProducts(product) {
    this.setState({
      showModal: true,
      compareToProduct: product,
    });
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
    const { compareToProduct, relatedProducts, showModal } = this.state;
    const {
      addOutfit,
      product,
      myOutfit,
      removeOutfit,
    } = this.props;

    const relatedProductCards = relatedProducts.map((relatedProduct) => (
      <RelatedProductCard key={relatedProduct.id} product={relatedProduct}>
        <button type="button" className={styles.actionButton} onClick={() => this.compareProducts(relatedProduct)}>
          <FaRegStar />
        </button>
      </RelatedProductCard>
    ));

    const myOutfitCards = Object.keys(myOutfit).map((productId) => {
      const thisProduct = myOutfit[productId];
      return (
        <RelatedProductCard
          key={productId}
          product={thisProduct}
        >
          <button type="button" className={styles.actionButton} onClick={() => removeOutfit(thisProduct)}>x</button>
        </RelatedProductCard>
      );
    });

    const addProductCard = (
      <RelatedProductCard key={'add' + product.id} product={product}>
        <button type="button" className={styles.addToOutfitButton} onClick={() => addOutfit(product)}>Test</button>
      </RelatedProductCard>
    );

    return (
      <section className={styles.relatedProducts}>
        <h3 className={styles.listTitle}>Related Products</h3>
        <RelatedProductsList
          sizeOfScroll={270}
        >
          {relatedProductCards}
        </RelatedProductsList>

        <h3 className={styles.listTitle}>Your Outfit</h3>
        <RelatedProductsList
          sizeOfScroll={270}
        >
          {[addProductCard, ...myOutfitCards]}
        </RelatedProductsList>
        {
          showModal
          && (
            <AppModal ref={this.registerModal} outsideClickHandler={() => this.setShowModal()}>
              <RelatedProductCompare product={product} relatedProduct={compareToProduct} />
            </AppModal>
          )
        }
      </section>
    );
  }
}

const productShape = PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.shape({
    original_price: PropTypes.string,
    sales_price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
    name: PropTypes.string,
  })),
});

RelatedProducts.defaultProps = {
  myOutfit: {},
  product: {
    features: [],
  },
};

RelatedProducts.propTypes = {
  addOutfit: PropTypes.func.isRequired,
  myOutfit: PropTypes.objectOf(PropTypes.shape(productShape)),
  removeOutfit: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
};

export default RelatedProducts;
