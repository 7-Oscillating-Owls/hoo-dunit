import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailSelector from '../ThumbnailSelector';
import styles from './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    };
  }

  handleClick(url) {
    this.setState({
      url,
    });
  }

  render() {
    const { images } = this.props;
    const { url } = this.state;
    return (
      <div className={styles.imageGallery}>
        <div className={styles.thumbnailWrapper}>
          {
              images.map((item) => (
                <div key={item.url}>
                  <img className={styles.thumbnail} src={item.url} alt="style" onClick={() => this.handleClick(item.url)} />
                </div>
              ))
          }
        </div>
        <div className={styles.imageWrapper}>
          <ThumbnailSelector currentImage={url} />
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
