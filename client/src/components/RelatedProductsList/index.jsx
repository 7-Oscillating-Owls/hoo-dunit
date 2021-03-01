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
      position: 0,
    };
  }

  scrollLeft() {
    const { position } = this.state;
    console.log('scroll left', position);
    this.setState({
      position: Math.max(0, position - 1),
    });
  }

  scrollRight() {
    const { position } = this.state;
    // eslint-disable-next-line react/prop-types
    const { relatedProducts } = this.props;

    this.setState({
      position: Math.min(relatedProducts.length, position + 1),
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { relatedProducts, stylesByProductId } = this.props;
    const { position } = this.state;

    const carouselStyle = {
      right: `${position * 250}px`,
    };

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
      />
    ));

    return (
      <div className={styles.relatedProductsList}>
        <div className={styles.leftArrowSpacer}>
          <button
            className={styles.scrollButton}
            type="button"
            onClick={() => this.scrollLeft()}
          >
            &lt;
          </button>
        </div>
        <div className={styles.carousel} style={carouselStyle}>
          {cardsComponenets}
        </div>
        <div className={styles.rightArrowSpacer}>
          <button
            className={styles.scrollButton}
            type="button"
            onClick={() => this.scrollRight()}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  };
}
// RelatedProductsList.propTypes = {
//   relatedProducts: PropTypes.arrayOf().isRequired,
//   stylesByProductId: PropTypes.objectOf().isRequired,
// };

export default RelatedProductsList;
