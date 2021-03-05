import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
          className={styles.input}
          onChange ={this.handleOnChange}
        />
        <FaSearch className={styles.icon} size={25} />
      </div>
    );
  }
}

export default SearchBar;
