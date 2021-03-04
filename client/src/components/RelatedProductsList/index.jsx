import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import RelatedProductCard from '../RelatedProductCard';

import styles from './RelatedProductsList.css';

// the linting errors occuring are because of the mock data we're using
// its much too complex of an object to spell out in prop types rn so im disabling
// the linter temporarily
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

    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    if (this.carousel) {
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
    // eslint-disable-next-line react/prop-types
    const { relatedProducts, stylesByProductId, actionType } = this.props;
    const { showLeftButton, showRightButton } = this.state;
    const scrollSize = 270;

    let buttonSymbol;
    let buttonAction;

    if (actionType === 'compare') {
      buttonSymbol = '*';
      buttonAction = (id) => console.log('compare ', id);
    } else {
      buttonSymbol = 'x';
      buttonAction = (id) => console.log('remove ', id);
    }

    // eslint-disable-next-line react/prop-types
    const cardsComponenets = relatedProducts.map(({
      id,
      description,
      name,
      category,
      features,
    }) => (
      <RelatedProductCard
        key={id}
        id={id}
        description={description}
        name={name}
        category={category}
        features={features}
        defaultStyle={stylesByProductId(id).results[0]}
      >
        <button type="button" className={styles.actionButton} onClick={() => buttonAction(id)}>{buttonSymbol}</button>
      </RelatedProductCard>
    ));

    const leftScrollButton = (
      <button className={styles.scrollButton} type="button" onClick={(e) => this.scrollCarousel(e, -scrollSize)}>
        &lt;
      </button>
    );

    const rightScrollButton = (
      <button className={styles.scrollButtonRight} type="button" onClick={(e) => this.scrollCarousel(e, scrollSize)}>
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
          {cardsComponenets}
        </div>
        { showRightButton && rightScrollButton }
      </div>
    );
  }
}
// RelatedProductsList.propTypes = {
//   relatedProducts: PropTypes.arrayOf().isRequired,
//   stylesByProductId: PropTypes.objectOf().isRequired,
// };

export default RelatedProductsList;
