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
    };
  }

  componentDidMount() {
    this.fetchProductDetail();
  }

  componentDidUpdate(prev) {
    const { match } = this.props;
    const { productId } = match.params;
    const { productId: prevId } = prev.match.params;

    if (productId !== prevId) {
      this.fetchProductDetail();
    }
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
    const { product } = this.state;

    return (
      <>
        <Overview />
        <RelatedProducts productId={match.params.productId} product={product} />
        <ReviewsList />
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
