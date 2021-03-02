import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { getSelectedStyleId } = this.props;
    getSelectedStyleId(Number(event.target.alt));
  }

  render() {
    const { allStyles } = this.props;

    return (
      <div className={`${styles.container} ${styles.styleSelector}`}>
        {allStyles.map((style) => (
          <div
            key={style.photos[0].url}
          >
            <img
              className={styles.item}
              src={style.photos[0].thumbnail_url}
              alt={style.style_id}
              onClick={this.handleClick}
            />
          </div>
        ))}
      </div>
    );
  }
}

StyleSelector.propTypes = {
  allStyles: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSelectedStyleId: PropTypes.func.isRequired,
};

export default StyleSelector;
