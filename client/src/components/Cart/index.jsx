import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { GrDeliver } from 'react-icons/gr';
import { BiRuler, BiEnvelope } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
import AppModal from '../AppModal';
import styles from './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
      selectedQuantity: 0,
      readyToBuy: false,
      sizeClicked: false,
      sku: 0,
    };
    this.getSize = this.getSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postCartData = this.postCartData.bind(this);
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
    this.postCartData();
  }

  getSize(selectedSize, sku) {
    this.setState({
      selectedSize,
      sizeClicked: true,
      sku,
    });
  }

  postCartData(sku) {
    sku = this.state.sku;
    axios.post('/cart', { sku_id: sku })
      .then(() => {
        console.log('successessfully post cart data');
      })
      .catch(() => {
        console.log('error while posting cart data');
      });
  }

  closeModal() {
    this.setState({
      readyToBuy: false,
    });
  }

  render() {
    const {
      skus, styleId, selectedUrl, name, styleName, originalPrice,
    } = this.props;
    const {
      selectedSize, selectedQuantity, readyToBuy, sizeClicked,
    } = this.state;
    const skuIds = Object.keys(skus);
    const filteredQuantity = Object.values(skus).filter((sku) => sku.size === selectedSize)
      .map((sku) => sku.quantity);
    const displayQuantity = Array.from(new Array(filteredQuantity[0]), (x, i) => i + 1);

    return (
      <div className={styles.addToCart}>
        <form className={styles.cartWrapper} onSubmit={this.handleSubmit}>
          {/* <div className={styles.empty} /> */}
          {/* <div className={styles.emptyAgain} /> */}
          <div className={styles.allThingsSize}>
            <h5 className={styles.selectSize}>Select size</h5>
            <div className={styles.sizeGuide}>
              <BiRuler className={styles.ruler} />
              Size Guide
            </div>
            <div className={styles.outOfStock}>
              <BiEnvelope className={styles.envelope} />
              Size out of stock?
            </div>
          </div>
          <div className={styles.sizeBox}>
            {
              skuIds.map((item) => (
                <button className={styles.sizeBtn} type="button" name="selectedSize" key={item} value={selectedSize} onClick={() => this.getSize(skus[item].size, item)}>
                  <span>{skus[item].size}</span>
                </button>
              ))
            }
          </div>

          <br />
          <button className={styles.submitCart} type="submit" value="ADD TO BAG">
            <span className={styles.addToBagText}>ADD TO BAG</span>
            <CgArrowLongRight className={styles.arrow} />
          </button>
          {/* <AiOutlineHeart className={styles.star} /> */}
          <select className={styles.quantity} name="selectedQuantity" value={selectedQuantity} onChange={this.handleChange}>
            <option value="">Quantity</option>
            {
              displayQuantity && displayQuantity.map((item) => (
                <option className={styles.sizeInt} key={item} value={item}>{item}</option>
              ))
            }
          </select>
        </form>

        {
          readyToBuy && (
            <AppModal ref={this.registerModal} outsideClickHandler={() => this.closeModal()}>

              <div className={styles.addedToBag}>
                <h5 className={styles.success}>SUCCESSFULLY ADDED TO CART!</h5>
                <div className={styles.cartImageWrapper}><img className={styles.cartImage} src={selectedUrl} alt="cartImage" /></div>
                <div className={styles.names}>
                  <h5>{name}</h5>
                  <h5>{styleName}</h5>
                  <h5>
                    $
                    {originalPrice}
                  </h5>
                  <h5>
                    Size
                    {' '}
                    {selectedSize}
                  </h5>
                  <h5>
                    Quantity
                    {' '}
                    {selectedQuantity}
                  </h5>
                </div>
                <div className={styles.buttons}>
                  <button className={styles.viewBag} type="submit" value="VIEW BAG">
                    <span className={styles.viewBagText}>VIEW BAG</span>
                    <CgArrowLongRight className={styles.arrow} />
                  </button>
                  <button className={styles.checkout} type="submit" value="CHECKOUT">
                    <span className={styles.checkoutText}>CHECKOUT</span>
                    <CgArrowLongRight className={styles.checkoutArrow} />
                  </button>
                </div>

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
  selectedUrl: PropTypes.string.isRequired,
};

export default Cart;
