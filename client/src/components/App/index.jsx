/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import RelatedProducts from '../RelatedProducts';
import QuestionsAndAnswers from '../QuestionsAndAnswers';
import Overview from '../Overview';
import ReviewsList from '../ReviewsList';
import styles from './App.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: undefined,
      starRating: 5,
      totalNumberOfStars: 0,
      recommendPercent: 100,
      metaObject: {},
      fiveStarTotal: '',
      fourStarTotal: '',
      threeStarTotal: '',
      twoStarTotal: '',
      oneStarTotal: '',
    };
    this.getMetaData = this.getMetaData.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getRecommendPercent = this.getRecommendPercent.bind(this);
  }

  componentDidMount() {
    this.fetchProductDetail();
    this.getMetaData();
  }

  componentDidUpdate(prev) {
    const { match } = this.props;
    const { productId } = match.params;
    const { productId: prevId } = prev.match.params;

    if (productId !== prevId) {
      this.fetchProductDetail();
    }
  }

  getMetaData() {
    axios.get('/reviews/meta')
      .then((response) => {
        this.setState({ metaObject: response.data });
        this.getAverageRating();
        this.getRecommendPercent();
      })
      .catch((error) => {
        console.log('Error fetching meta data: ', error);
      });
  }

  getAverageRating() {
    const { metaObject } = this.state;
    const metaRatings = metaObject.ratings;
    let starSubtotal = 0;
    let starTotal = 0;
    if (metaRatings) {
      for (const key in metaRatings) {
        starSubtotal += Number(key * metaRatings[key]);
        starTotal += Number(metaRatings[key]);
      }
    }
    this.setState({
      starRating: ((starSubtotal / starTotal).toFixed(1)),
      fiveStarTotal: metaRatings['5'],
      fourStarTotal: metaRatings['4'],
      threeStarTotal: metaRatings['3'],
      twoStarTotal: metaRatings['2'],
      oneStarTotal: metaRatings['1'],
    });
  }

  getRecommendPercent() {
    const { metaObject } = this.state;
    const { recommended } = metaObject;
    const totalStars = (Number(recommended.true) + Number(recommended.false));
    const recommendedPercentage = (
      (recommended.true / totalStars).toFixed(2) * 100
    );
    this.setState({
      recommendPercent: recommendedPercentage,
      totalNumberOfStars: totalStars,
    });
  }

  fetchProductDetail() {
    const { match } = this.props;
    const { productId } = match.params;
    if (productId) {
      axios.get(`/api/products/${productId}`)
        .then((response) => {
          this.setState({
            product: response.data,
          });
        });
    }
  }

  render() {
    const { match } = this.props;
    const {
      product,
      metaObject,
      starRating,
      recommendPercent,
      totalNumberOfStars,
      fiveStarTotal,
      fourStarTotal,
      threeStarTotal,
      twoStarTotal,
      oneStarTotal,
    } = this.state;
    return (
      <>
        <Overview productId={match.params.productId} product={product} starRating={starRating} />
        <RelatedProducts productId={match.params.productId} product={product} />
        <ReviewsList
          starRating={starRating}
          metaObject={metaObject}
          recommendPercent={recommendPercent}
          totalNumberOfStars={totalNumberOfStars}
          fiveStarTotal={fiveStarTotal}
          fourStarTotal={fourStarTotal}
          threeStarTotal={threeStarTotal}
          twoStarTotal={twoStarTotal}
          oneStarTotal={oneStarTotal}
        />
        <QuestionsAndAnswers />
      </>
    );
  }
}

AppComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};

const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className={styles.nav}>
        <h1 className={styles.brandName}>Oscillating Owls</h1>
        <form name="appSearch" className={styles.searchForm}>
          <input type="search" className={styles.searchInput} />
        </form>
      </nav>
      <h3 className={styles.announcement}>
        <span className={styles.announcementAlert}>site-wide accouncement message!</span>
        <span> — sale / discount </span>
        <span className={styles.announcementOffer}>offer</span>
        <span> — </span>
        <span className={styles.announcementHighlight}>new product highlight</span>
      </h3>

      <Switch>
        <Route path="/products/:productId" component={AppComponent} />
        <Route path="*" render={() => (<div>No Route</div>)} />
      </Switch>
    </div>
  </Router>
);

export default App;
