import React from 'react';
import PropTypes from 'prop-types';
import AppModal from '../AppModal';
import styles from './ThumbnailSelector.css';

class ThumbnailSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: null,
      width: null,
      clicked: true,
      isOpen: false,
    };

    this.showImage = this.showImage.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    /* from react doc: Refs provide a way to access DOM
     nodes or React elements created in the render method */
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.initialHeight = this.imageRef.current.clientHeight;
    this.initialWidth = this.imageRef.current.clientWidth;
  }

  showImage() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  expand() {
    // reference to the node becomes available at the "current" attribute
    this.setState({
      height: this.imageRef.current.clientHeight + 20,
      width: this.imageRef.current.clientWidth + 20,
      clicked: false,
    });
  }

  collapse() {
    this.setState({
      height: this.clientHeight,
      width: this.clientWidth,
      clicked: true,
    });
  }

  render() {
    const { currentImage } = this.props;
    const {
      height, width, clicked, isOpen,
    } = this.state;
    const imageSize = { height, width };
    return (
      <div className={styles.imageWrapper}>
        <img className={styles.currentImage} style={imageSize} src={currentImage} ref={this.imageRef} alt="displayImage" onClick={this.showImage} />

        {isOpen && (
          <AppModal ref={this.registerModal} outsideClickHandler={() => this.showImage()}>
            <img className={styles.currentImage} style={imageSize} src={currentImage} ref={this.imageRef} alt="displayImage" />
            {clicked
              ? (
                <div className={styles.zoombtn}>
                  <button onClick={this.expand} type="button">-</button>
                </div>
              )
              : (
                <div className={styles.zoombtn}>
                  <button onClick={this.collapse} type="button">+</button>
                </div>
              )}
          </AppModal>
        )}
      </div>
    );
  }
}

ThumbnailSelector.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default ThumbnailSelector;
