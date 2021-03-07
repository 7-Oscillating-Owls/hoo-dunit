import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar } from 'react-icons/ai';
import AppModal from '../AppModal';
import styles from './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
      selectedQuantity: 0,
      readyToBuy: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      readyToBuy: true,
    });
  }

  closeModal() {
    this.setState({
      readyToBuy: false,
    });
  }

  render() {
    const { skus, styleId } = this.props;
    const { selectedSize, selectedQuantity, readyToBuy } = this.state;
    const skuIds = Object.keys(skus);
    const filteredQuantity = Object.values(skus).filter((sku) => sku.size === selectedSize)
      .map((sku) => sku.quantity);
    const displayQuantity = Array.from(new Array(filteredQuantity[0]), (x, i) => i + 1);

    return (
      <div className={styles.addToCart}>
        <form className={styles.cartWrapper} onSubmit={this.handleSubmit}>
          <select className={styles.size} name="selectedSize" value={selectedSize} onChange={this.handleChange}>
            <option value="">SELECT A SIZE</option>
            {
              skuIds.map((item) => (
                <option key={item} value={skus[item].size}>
                  {skus[item].size}
                </option>
              ))
            }
          </select>
          <select className={styles.quantity} name="selectedQuantity" value={selectedQuantity} onChange={this.handleChange}>
            <option value="">-</option>
            {
              displayQuantity && displayQuantity.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
          <br />
          <input className={styles.submitCart} type="submit" value="ADD TO BAG" />
          <AiOutlineStar className={styles.star} />
        </form>

        {
          readyToBuy && (
          <AppModal ref={this.registerModal} outsideClickHandler={() => this.closeModal()}>
            <div className={styles.addedToBag}>
              Added to Cart: Style ID
              {styleId}
              , Size
              {selectedSize}
              {' '}
              Quantity
              {selectedQuantity}
            </div>
          </AppModal>
          )
        }

      </div>
    );
  }
}

Cart.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
  styleId: PropTypes.number.isRequired,
};

export default Cart;
