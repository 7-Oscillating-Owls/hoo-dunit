import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.css';

const Cart = ({ skus }) => {
  const sizes = Object.keys(skus);
  return (
    <div className={styles.selectContainer}>
      <form>
        <select name="size">
          <option value="">SELECT A SIZE</option>
          {
            sizes.map((item) => (
              <option key={item + skus[item]} value={skus[item].size}>{skus[item].size}</option>
            ))
          }
        </select>
        <select name="quantity">
          <option value="">1</option>
        </select>
        <br />
        <input type="submit" value="ADD TO BAG" />
      </form>
    </div>
  );
};

Cart.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Cart;
