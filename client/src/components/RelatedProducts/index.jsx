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
    const { product, myOutfit } = this.props;

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
        <RelatedProductCard key={productId} product={thisProduct} />
      );
    });
    console.log(myOutfitCards);
    const addProductCard = (
      <RelatedProductCard product={product}>
        <button type="button" className={styles.addToOutfitButton}>Test</button>
      </RelatedProductCard>
    );
    myOutfitCards.unshift(addProductCard);

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
          {myOutfitCards}
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

RelatedProducts.defaultProps = {
  product: {
    features: [],
  },
};

RelatedProducts.propTypes = {
  addOutfit: PropTypes.func.isRequired,
  myOutfit: PropTypes.objectOf(PropTypes.string).isRequired,
  removeOutfit: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  product: PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
};

export default RelatedProducts;
