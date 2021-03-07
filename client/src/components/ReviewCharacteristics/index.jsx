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
  const characteristicBox = (
    <div className={styles.grayBox}>
      <div className={styles.box}> </div>
      <div className={styles.box}> </div>
      <div className={styles.box}> </div>
      <div className={styles.box}> </div>
      <div className={styles.box}> </div>
    </div>
  );

  if (metaObject.characteristics) {
    console.log('This is metaObjectcharacteristics: ', metaObject.characteristics);
    const characteristics = metaObject.characteristics;
    if (characteristics.Size) {
      size = `Size: ${((characteristics.Size.value) / 20).toFixed(1)}%`;
      sizeBar = characteristicBox;
    }
    if (characteristics.Width) {
      width = `Width: ${(((characteristics.Width.value) / 5) * 100).toFixed(1)}%`;
      widthBar = characteristicBox;
    }
    if (characteristics.Comfort) {
      comfort = `Comfort: ${(((characteristics.Comfort.value) / 5) * 100).toFixed(1)}%`;
      comfortBar = characteristicBox;
    }
    if (characteristics.Quality) {
      quality = `Quality: ${(((characteristics.Quality.value) / 5) * 100).toFixed(1)}%`;
      qualityBar = characteristicBox;
    }
    if (characteristics.Fit) {
      fit = `Characteristics: ${(((characteristics.Fit.value) / 5) * 100).toFixed(1)}%`;
      fitBar = characteristicBox;
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
    </div>
  );
};

export default ReviewCharacteristics;

// Notes and Experimentation:

// Need to get characteristics from data and display as slider
// Could have 5 separate divs as sliders based on percentage
