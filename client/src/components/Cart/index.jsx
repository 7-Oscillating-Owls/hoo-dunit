import React from 'react';
import styles from './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemSelected: "",
    };
  }

  render() {
    const { skus } = this.props;
    const sizes = Object.keys(skus);

    return (
      <div className={styles.selectContainer}>
        <form>
          <select name="size">
            {
              sizes.map((item, index) => (
                <option value={skus[item].size} key={index}>{skus[item].size}</option>
              )
              )}

          </select>
          <select name="quantity">
            <option value="">1</option>
          </select>
          <br />
          <input type="submit" value="ADD TO BAG" />
        </form>
      </div>
    );
  }
}


export default Cart;
