import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import RelatedProducts from '../RelatedProducts';
import QuestionsAndAnswers from '../QuestionsAndAnswers';
import Overview from '../Overview';
import ReviewsList from '../ReviewsList';
import styles from './App.css';

class AppComponent extends React.Component {
  componentDidMount() {
    const { productId } = this.props.match.params;
    console.log('initial fetch for ', productId);
  }

  componentDidUpdate() {
    const { productId } = this.props.match.params;
    console.log('fetch data for ', productId);
  }

  render() {
    const { productId } = this.props.match.params;
    return (
      <>
        <Overview />
        <RelatedProducts productId={productId} />
        <ReviewsList />
        <QuestionsAndAnswers />
      </>
    );
  }
}

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
