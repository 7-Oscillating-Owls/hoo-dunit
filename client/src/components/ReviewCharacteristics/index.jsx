import React from 'react';
import styles from './ReviewCharacteristics.css';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  let size;
  let sizeBar;
  let width;
  let widthBar;
  let comfort;
  let comfortBar;
  let quality;
  let qualityBar;
  let fit;
  let fitBar;

  if (metaObject.characteristics) {
    console.log('This is metaObjectcharacteristics: ', metaObject.characteristics);
    const characteristics = metaObject.characteristics;
    if (characteristics.Size) {
      size = `Size: ${((characteristics.Size.value) / 20).toFixed(1)}%`;
      sizeBar = (
        <div className={styles.grayBox}>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
        </div>
      );
    } else {
      size = null;
      sizeBar = null;
    }
    if (characteristics.Width) {
      width = `Width: ${(((characteristics.Width.value) / 5) * 100).toFixed(1)}%`;
      widthBar = (
        <div className={styles.grayBox}>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
        </div>
      );
    } else {
      width = null;
      widthBar = null;
    }
    if (characteristics.Comfort) {
      comfort = `Comfort: ${(((characteristics.Comfort.value) / 5) * 100).toFixed(1)}%`;
      comfortBar = (
        <div className={styles.grayBox}>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
        </div>
      );
    } else {
      comfort = null;
      comfortBar = null;
    }
    if (characteristics.Quality) {
      quality = `Quality: ${(((characteristics.Quality.value) / 5) * 100).toFixed(1)}%`;
      qualityBar = (
        <div className={styles.grayBox}>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
        </div>
      );
    } else {
      quality = null;
      qualityBar = null;
    }
    if (characteristics.Fit) {
      fit = `Characteristics: ${(((characteristics.Fit.value) / 5) * 100).toFixed(1)}%`;
      fitBar = (
        <div className={styles.grayBox}>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
          <div className={styles.box}> </div>
        </div>
      );
    } else {
      fit = null;
      fitBar = null;
    }
  }

  return (
    <div className={styles.characteristics}>
      <div>
        {size}
        {sizeBar}
      </div>
      <div>
        {width}
        {widthBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {quality}
        {qualityBar}
      </div>
      <div>
        {fit}
        {fitBar}
      </div>
      {
        // Testing below - there are a total of 10 potential characteristic traits
      }
      {/* <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div>
      <div>
        {comfort}
        {comfortBar}
      </div> */}
    </div>
  );
};

export default ReviewCharacteristics;

// Notes and Experimentation:

// Need to get characteristics from data and display as slider
// Could have 5 separate divs as sliders based on percentage
