import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './RelatedProductsList.css';

class RelatedProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftButton: false,
      showRightButton: false,
    };

    this.setCarouselRef = (element) => {
      this.carousel = element;
    };
  }

  componentDidMount() {
    this.renderButtons();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (prevProps.children !== children) {
      this.renderButtons();
    }
  }

  makeScrollHandler() {
    let timerId = null;
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        this.renderButtons();
      }, 200);
    };
  }

  scrollCarousel(e, x) {
    e.stopPropagation();

    this.carousel.scroll({
      left: this.carousel.scrollLeft + x,
      behavior: 'smooth',
    });
  }

  renderButtons() {
    if (this.carousel) {
      const scrollableWidth = this.carousel.scrollWidth - this.carousel.clientWidth;

      this.setState({
        showLeftButton: this.carousel.scrollLeft > 0,
        showRightButton: this.carousel.scrollLeft < scrollableWidth,
      });
    }
  }

  render() {
    const { children, sizeOfScroll } = this.props;
    const { showLeftButton, showRightButton } = this.state;

    const leftScrollButton = (
      <button className={styles.scrollButton} type="button" onClick={(e) => this.scrollCarousel(e, -sizeOfScroll)}>
        &lt;
      </button>
    );

    const rightScrollButton = (
      <button className={styles.scrollButtonRight} type="button" onClick={(e) => this.scrollCarousel(e, sizeOfScroll)}>
        &gt;
      </button>
    );

    return (
      <div className={styles.relatedProductsList}>
        { showLeftButton && leftScrollButton }
        <div
          className={styles.carousel}
          ref={this.setCarouselRef}
          onScroll={this.makeScrollHandler()}
        >
          {children}
        </div>
        { showRightButton && rightScrollButton }
      </div>
    );
  }
}

RelatedProductsList.defaultProps = {
  children: undefined,
};

RelatedProductsList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  sizeOfScroll: PropTypes.number.isRequired,
};

export default RelatedProductsList;
