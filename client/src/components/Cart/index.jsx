import React from 'react';
import styles from './Cart.css';

const Cart = () => (
  <div className={styles.selectContainer}>
    <form>
      <select name="size">
        <option value="">SELECT SIZE</option>
      </select>
      <select name="quantity">
        <option value="">1</option>
      </select>
      <br />
      <input type="submit" value="ADD TO BAG" />
    </form>
  </div>
);

export default Cart;
