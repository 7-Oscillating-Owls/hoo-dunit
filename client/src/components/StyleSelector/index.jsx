import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: -1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(styleId, styleName, index) {
    const { getSelectedStyleId } = this.props;
    getSelectedStyleId(styleId, styleName);
    this.setState({
      isClicked: index,
    });
  }

  render() {
    const { allStyles } = this.props;
    const { isClicked } = this.state;
    return (
      <div className={styles.styleSelector}>
        <div className={styles.imageContainer}>
          {allStyles.map((style, index) => (
            <div className={styles.imageWrapper} key={style.photos[0].url}>
              <img
                className={styles.thumbnail}
                src={style.photos[0].thumbnail_url}
                alt={style.style_id}
                onClick={() => this.handleClick(style.style_id, style.name, index)}
              />

              {(isClicked === index)
                ? (
                  <FaCheckCircle className={styles.checkmark} />
                )
                : null }
            </div>
          ))}

        </div>
        <div className={styles.nameContainer}>
          {allStyles.length}
          {' '}
          STYLES AVAILABLE
        </div>
      </div>
    );
  }
}

StyleSelector.propTypes = {
  allStyles: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSelectedStyleId: PropTypes.func.isRequired,
};

export default StyleSelector;
