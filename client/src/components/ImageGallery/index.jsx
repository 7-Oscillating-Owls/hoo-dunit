import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    const { current } = this.state;
    const { images } = this.props;
    if (current === 0) {
      this.setState({
        current: images.length - 1,
      });
    } else {
      this.setState({
        current: current - 1,
      });
    }
  }

  nextSlide() {
    const { current } = this.state;
    const { images } = this.props;
    if (current === images.length - 1) {
      this.setState({
        current: 0,
      });
    } else {
      this.setState({
        current: current + 1,
      });
    }
  }

  render() {
    const { current } = this.state;
    const { images } = this.props;
    return (
      <section className={styles.carousel}>
        <button data-testid="leftArrow-click" type="button" className="left-arrow" onClick={this.previousSlide}>left</button>
        <button data-testid="rightArrow-click" type="button" className="right-arrow" onClick={this.nextSlide}>right</button>
        <div className="image-items">
          {
            images.map((item, index) => (
              <div key="1">
                {index === current && <img className={styles.styleImage} src={item.url} alt="style" />}
              </div>
            ))
          }
        </div>

      </section>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
