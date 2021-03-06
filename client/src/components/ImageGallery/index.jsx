import React from 'react';
import PropTypes from 'prop-types';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import ThumbnailSelector from '../ThumbnailSelector';

import styles from './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      current: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  handleClick(url, index) {
    this.setState({
      url,
      current: index,
    });
  }

  previousSlide() {
    const { images } = this.props;
    const { current } = this.state;

    if (current === 0) {
      this.setState({
        current: images.length - 1,
      });
    } else {
      this.setState({
        current: current - 1,
      });
    }
    const currImage = images.filter((item, index) => (
      index === current
    ));
    this.setState({
      url: currImage[0].url,
    });
  }

  nextSlide() {
    const { images } = this.props;
    const { current } = this.state;

    if (current === images.length - 1) {
      this.setState({
        current: 0,
      });
    } else {
      this.setState({
        current: current + 1,
      });
    }
    const currImage = images.filter((item, index) => (
      index === current
    ));
    this.setState({
      url: currImage[0].url,
    });
  }

  render() {
    const { images } = this.props;
    const { url } = this.state;

    return (
      <div className={styles.imageGallery}>
        <div className={styles.thumbnailWrapper}>
          {
              images.map((item, index) => (
                <div key={item.url}>
                  <img className={styles.thumbnail}  src={item.url} alt="style" onClick={() => this.handleClick(item.url, index)} />
                </div>
              ))
          }
        </div>
        <HiArrowNarrowLeft className={styles.leftArrow} onClick={this.previousSlide} />
        <ThumbnailSelector currentImage={url} />
        <HiArrowNarrowRight className={styles.rightArrow} onClick={this.nextSlide} />

      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
