import React from 'react'
import styles from './SearchBar.css'

const SearchBar = () => (
  <input
    type="text"
    placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    className={styles.searchbar}
  />
)

export default SearchBar