import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThumbnailSelector.css';

class ThumbnailSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null,
      width: null,
      clicked: true,
    };

    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    /* from react doc: Refs provide a way to access DOM
     nodes or React elements created in the render method */
    this.imageRef = React.createRef();
  }

  expand() {
    // reference to the node becomes available at the "current" attribute
    this.setState({
      height: this.imageRef.current.clientHeight + 50,
      width: this.imageRef.current.clientWidth + 50,
      clicked: false,
    });
  }

  collapse() {
    this.setState({
      height: 420,
      width: 850,
      clicked: true,
    });
  }

  render() {
    const { currentImage } = this.props;
    const { height, width, clicked } = this.state;
    const imageSize = { height, width };

    return (
      <div className={styles.imageWrapper}>
        <img className={styles.currentImage} style={imageSize} src={currentImage} ref={this.imageRef} alt="displayImage" />

        {clicked
          ? (
            <div className={styles.zoombtn}>
              <button onClick={this.expand} type="button">expand</button>
            </div>
          )
          : (
            <div className={styles.zoombtn}>
              <button onClick={this.collapse} type="button">collapse</button>
            </div>
          )}
      </div>
    );
  }
}

ThumbnailSelector.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default ThumbnailSelector;
