import React from 'react';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>

    <nav className={styles.nav}>
      <h1 className={styles.brandName}>Oscillating Owls</h1>
      <form name="appSearch" className={styles.searchForm}>
        <input type="search" className={styles.searchInput}></input>
      </form>
    </nav>
    <h3 className={styles.announcement}><span className={styles.announcementAlert}>site-wide accouncement message!</span> -- sale / discount <span className={styles.announcementOffer}>offer</span> -- <span className={styles.announcementHighlight}>new product highlight</span></h3>

    <div className={styles.overview}></div>
    <div className={styles.relatedProducts}></div>
    <div className={styles.productReviews}></div>
    <div className={styles.questionsAnswers}></div>


  </div>
);

export default App;
