import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import RelatedProductCard from '../RelatedProductCard';
import ComparisonButton from '../ComparisonButton';

import styles from './RelatedProductsList.css';

// the linting errors occuring are because of the mock data we're using
// its much too complex of an object to spell out in prop types rn so im disabling
// the linter temporarily
class RelatedProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      containerWidth: 0,
    };

    this.setContainerRef = (element) => {
      this.container = element;
    };

    this.setCarouselRef = (element) => {
      this.carousel = element;
    };

    this.showScrollLeftButton = this.showScrollLeftButton.bind(this);
    this.showScrollRightButton = this.showScrollRightButton.bind(this);
  }

  componentDidMount() {
    if (this.container) {
      this.setState({
        containerWidth: this.container.scrollWidth,
      });
    }
  }

  scrollLeft(e) {
    e.stopPropagation();

    const { position } = this.state;
    const newX = Math.max(this.carousel.scrollLeft - 270, 0);
    this.carousel.scroll({
      left: Math.min(position * 270, newX),
      behavior: 'smooth',
    });

    this.setState({
      position: Math.max(position - 1, 0),
    });
  }

  scrollRight(e) {
    e.stopPropagation();

    const { position } = this.state;
    const { relatedProducts } = this.props;
    const newX = this.carousel.scrollLeft + 270;

    this.carousel.scroll({
      left: Math.max(position * 270, newX),
      behavior: 'smooth',
    });

    this.setState({
      position: Math.min(position + 1, relatedProducts.length),
    });
  }

  showScrollRightButton() {
    if (this.container && this.carousel) {
      const scrollableWidth = this.carousel.scrollWidth - this.carousel.clientWidth;
      return this.carousel.scrollLeft < scrollableWidth;
    }
    return false;
  }

  showScrollLeftButton() {
    const { position } = this.state;

    if (this.carousel) {
      return this.carousel.scrollLeft > 0;
    }
    return position > 0;
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { relatedProducts, stylesByProductId } = this.props;
    const { position } = this.state;

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
        ActionButton={ComparisonButton}
      />
    ));

    return (
      <div className={styles.relatedProductsList} ref={this.setContainerRef}>
        {
          this.showScrollLeftButton()
          && (
            <button
              className={styles.scrollButton}
              type="button"
              onClick={(e) => this.scrollLeft(e)}
            >
              &lt;
            </button>
          )
        }
        <div className={styles.carousel} ref={this.setCarouselRef}>
          {cardsComponenets}
        </div>

        {/* <div className={styles.rightArrowSpacer}> */}
        {
          this.showScrollRightButton()
          && (
            <button
              className={styles.scrollButtonRight}
              type="button"
              onClick={(e) => this.scrollRight(e)}
            >
              &gt;
            </button>
          )
        }
        {/* </div> */}
      </div>
    );
  }
}
// RelatedProductsList.propTypes = {
//   relatedProducts: PropTypes.arrayOf().isRequired,
//   stylesByProductId: PropTypes.objectOf().isRequired,
// };

export default RelatedProductsList;
