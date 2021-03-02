import React from 'react';
import PropTypes from 'prop-types';
import styles from './StyleSelector.css';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStyleId: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(styleId) {
    this.setState({
      selectedStyleId: styleId,
    });
    const { selectedStyleId } = this.state;
    const { getSelectedStyleId } = this.props;
    getSelectedStyleId(selectedStyleId);
  }

  render() {
    const { allStyles } = this.props;

    return (
      <div className={styles.container}>
        {allStyles.map((style) => (
          <div
            key={style.photos[0].url}
          >
            <img
              className={styles.item}
              src={style.photos[0].thumbnail_url}
              alt={style.style_id}
              onClick={()=>this.handleClick(style.style_id)}
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
