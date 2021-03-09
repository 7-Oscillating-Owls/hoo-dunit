import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.css';

const SearchBar = (props) => {
    return (
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
          className={styles.input}
          onChange={props.change}
        />
        <FaSearch className={styles.icon} size={25} />
      </div>
    );

};

export default SearchBar;
