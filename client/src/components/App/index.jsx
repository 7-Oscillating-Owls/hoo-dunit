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
      myOutfit: {},
      characteristicNames: [],
      characteristicIds: [],
      metaObject: {},
    };

    let storage;

    try { // test if localStorage works
      storage = window.localStorage;
      storage.setItem('OO7', 'owls');
      storage.getItem('007');
      storage.removeItem('007');
    } catch { // if not, no persistence
      storage = {};
    }
    this.localStorage = storage;

    this.addToMyOutfit = this.addToMyOutfit.bind(this);
    this.removeFromMyOutfit = this.removeFromMyOutfit.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
    this.getCharacteristicId = this.getCharacteristicId.bind(this);
  }

  componentDidMount() {
    this.fetchProductDetail();
    this.getMetaData();

    if (this.localStorage.getItem) {
      const myOutfit = this.localStorage.getItem('myOutfit') || '{}';
      this.setState({
        myOutfit: JSON.parse(myOutfit),
      });
    }
  }

  componentDidUpdate(prev) {
    const { match } = this.props;
    const { productId } = match.params;
    const { productId: prevId } = prev.match.params;

    if (productId !== prevId) {
      this.fetchProductDetail();
      this.getMetaData();
    }
  }

  getMetaData() {
    const { match } = this.props;
    axios.get('/reviews/meta', {
      params: {
        productId: match.params.productId || 14296,
      },
    })
      .then((response) => {
        this.setState({ metaObject: response.data });
        this.getCharacteristicId();
      })
      .catch((error) => {
        console.log('Error fetching meta data: ', error);
        throw (error);
      });
  }

  getCharacteristicId() {
    const names = [];
    const id = [];
    const { metaObject } = this.state;
    const { characteristics } = metaObject;
    Object.keys(characteristics).forEach((key) => {
      if (characteristics[key]) {
        names.push(key);
        id.push(characteristics[key]);
      }
    });
    this.setState({
      characteristicNames: names,
      characteristicIds: id,
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

  addToMyOutfit(product) {
    const { myOutfit } = this.state;

    const newOutfit = {
      ...myOutfit,
      [product.id]: product,
    };

    if (this.localStorage.getItem) {
      this.localStorage.setItem('myOutfit', JSON.stringify(newOutfit));
    }

    this.setState({
      myOutfit: newOutfit,
    });
  }

  removeFromMyOutfit(product) {
    const { myOutfit } = this.state;
    const newOutfit = {
      ...myOutfit,
    };

    delete newOutfit[product.id];

    if (this.localStorage.getItem) {
      this.localStorage.setItem('myOutfit', JSON.stringify(newOutfit));
    }

    this.setState({
      myOutfit: newOutfit,
    });
  }

  render() {
    const { match } = this.props;
    const {
      product,
      myOutfit,
      metaObject,
      characteristicNames,
      characteristicIds,
    } = this.state;
    return (
      <>
        <Overview productId={match.params.productId} product={product} metaObject={metaObject} />
        <RelatedProducts
          productId={match.params.productId}
          product={product}
          myOutfit={myOutfit}
          addOutfit={this.addToMyOutfit}
          removeOutfit={this.removeFromMyOutfit}
        />
        <ReviewsList
          currentProduct={match.params.productId}
          metaObject={metaObject}
          characteristicNames={characteristicNames}
          characteristicIds={characteristicIds}
        />
        <QuestionsAndAnswers productId={match.params.productId} />
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
