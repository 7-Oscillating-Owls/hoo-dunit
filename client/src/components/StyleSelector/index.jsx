import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 'Forest Green & Black',
      isClicked: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(styleId, styleName) {
    const { getSelectedStyleId } = this.props;
    getSelectedStyleId(styleId);
    this.setState({
      selectedStyle: styleName,
      isClicked: false,
    });
  }

  render() {
    const { allStyles } = this.props;
    const { selectedStyle, isClicked } = this.state;
    return (
      <div className={styles.styleSelector}>
        <div className={styles.nameContainer}>
          <span className={styles.style}>STYLE &gt; </span>
          {selectedStyle}
        </div>
        <div className={styles.imageContainer}>
          {allStyles.map((style) => (
            <div className={styles.imageWrapper} key={style.photos[0].url}>
            <img
              className={styles.thumbnail}
              src={style.photos[0].thumbnail_url}
              alt={style.style_id}
              onClick={()=>this.handleClick(style.style_id, style.name)}
            />
            </div>
          ))}
          <div className={styles.checkmark}>
            {isClicked &&
            <div>Check</div>}
        </div>
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
