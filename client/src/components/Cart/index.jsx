import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const { styleId } = this.props;
    this.state = {
      selectedSize: '',
      selectedQuantity: 0,
      selectedStyleId: styleId,
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
    const { selectedSize, selectedQuantity, selectedStyleId } = this.state;
    console.log(`Added to Cart: Style ID ${selectedStyleId}, Size ${selectedSize} Quantity ${selectedQuantity}`);
  }

  render() {
    const { skus } = this.props;
    const { selectedSize, selectedQuantity } = this.state;
    const skuIds = Object.keys(skus);
    const filteredQuantity = Object.values(skus).filter((sku) => sku.size === selectedSize)
      .map((sku) => sku.quantity);
    const displayQuantity = Array.from(new Array(filteredQuantity[0]), (x, i) => i + 1);

    return (
      <div className={styles.selectContainer}>
        <form onSubmit={this.handleSubmit}>
          <select name="selectedSize" value={selectedSize} onChange={this.handleChange}>
            <option value="">SELECT A SIZE</option>
            {
              skuIds.map((item) => (
                <option key={item} value={skus[item].size}>
                  {skus[item].size}
                </option>
              ))
            }
          </select>
          <select name="selectedQuantity" value={selectedQuantity} onChange={this.handleChange}>
            <option value="">-</option>
            {
              displayQuantity && displayQuantity.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
          <br />
          <input type="submit" value="ADD TO BAG" />
        </form>
      </div>
    );
  }
}

Cart.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
  styleId: PropTypes.number.isRequired,
};

export default Cart;
