import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';

import AppModal from '../AppModal';
import RelatedProductCard from '../RelatedProductCard';
import RelatedProductCompare from '../RelatedProductCompare';
import styles from './RelatedProductsList.css';

class RelatedProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftButton: false,
      showRightButton: false,
      compareToProduct: undefined,
    };

    this.setCarouselRef = (element) => {
      this.carousel = element;
    };

    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    this.renderButtons();
  }

  componentDidUpdate(prevProps) {
    const { relatedProducts } = this.props;
    if (prevProps.relatedProducts !== relatedProducts) {
      this.renderButtons();
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
    // this.setShowModal(true);
  }

  makeScrollHandler() {
    let timerId = null;
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        this.renderButtons();
      }, 200);
    };
  }

  scrollCarousel(e, x) {
    e.stopPropagation();

    this.carousel.scroll({
      left: this.carousel.scrollLeft + x,
      behavior: 'smooth',
    });
  }

  renderButtons() {
    if (this.carousel) {
      const scrollableWidth = this.carousel.scrollWidth - this.carousel.clientWidth;

      this.setState({
        showLeftButton: this.carousel.scrollLeft > 0,
        showRightButton: this.carousel.scrollLeft < scrollableWidth,
      });
    }
  }

  render() {
    const { actionType, product, relatedProducts } = this.props;
    const { compareToProduct, showLeftButton, showRightButton, showModal } = this.state;
    const scrollSize = 270;

    let buttonSymbol;
    let buttonAction;

    if (actionType === 'compare') {
      buttonSymbol = <FaRegStar />;
      buttonAction = (selectedProduct) => this.compareProducts(selectedProduct);
    } else {
      buttonSymbol = 'x';
      buttonAction = (id) => console.log('remove ', id);
    }

    const cardsComponenets = relatedProducts.map((relatedProduct) => (
      <RelatedProductCard key={relatedProduct.id} product={relatedProduct}>
        <button type="button" className={styles.actionButton} onClick={() => buttonAction(relatedProduct)}>{buttonSymbol}</button>
      </RelatedProductCard>
    ));

    const leftScrollButton = (
      <button className={styles.scrollButton} type="button" onClick={(e) => this.scrollCarousel(e, -scrollSize)}>
        &lt;
      </button>
    );

    const rightScrollButton = (
      <button className={styles.scrollButtonRight} type="button" onClick={(e) => this.scrollCarousel(e, scrollSize)}>
        &gt;
      </button>
    );

    return (
      <div className={styles.relatedProductsList}>
        { showLeftButton && leftScrollButton }
        <div
          className={styles.carousel}
          ref={this.setCarouselRef}
          onScroll={this.makeScrollHandler()}
        >
          {cardsComponenets}
        </div>
        { showRightButton && rightScrollButton }
        {
          showModal
          && (
            <AppModal ref={this.registerModal} outsideClickHandler={() => this.setShowModal()}>
              <RelatedProductCompare product={product} relatedProduct={compareToProduct} />
            </AppModal>
          )
        }
      </div>
    );
  }
}

RelatedProductsList.defaultProps = {
  product: {},
};

RelatedProductsList.propTypes = {
  actionType: PropTypes.string.isRequired,
  product: PropTypes.shape({}),
  relatedProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default RelatedProductsList;
