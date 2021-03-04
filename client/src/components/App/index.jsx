import React from 'react';
import RelatedProducts from '../RelatedProducts';
import QuestionsAndAnswers from '../QuestionsAndAnswers';
import Overview from '../Overview';
import ReviewsList from '../ReviewsList';
// import { registerModal, AppModalInstance } from '../AppModal';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
    };
  }

  render() {
    const { showModal } = this.state;

    return (
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

        <Overview />
        <RelatedProducts />
        <ReviewsList />
        <QuestionsAndAnswers />
      </div>
    );
  }
}

export default App;
