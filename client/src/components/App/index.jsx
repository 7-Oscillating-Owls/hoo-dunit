import React from 'react';

import RelatedProducts from '../RelatedProducts';
import styles from './App.css';

const App = () => (
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

    <div className={styles.overview} />
    <RelatedProducts />
    <div className={styles.productReviews} />
    <div className={styles.questionsAnswers} />

  </div>
);

export default App;
