import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import styles from './ReviewCharacteristics.css';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  let size;
  let sizeBar;
  let sizeScale;
  let width;
  let widthBar;
  let widthScale;
  let comfort;
  let comfortBar;
  let comfortScale;
  let quality;
  let qualityBar;
  let qualityScale;
  let fit;
  let fitBar;
  let fitScale;
  const characteristicBox = (
    <div>
      <GoTriangleDown color="#75C0DC" className={styles.triangle} />
      <div className={styles.grayBox}>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
        <div className={styles.box}> </div>
      </div>
    </div>
  );

  if (metaObject.characteristics) {
    const characteristics = metaObject.characteristics;
    if (characteristics.Size) {
      size = `Size: ${((characteristics.Size.value) / 20).toFixed(1)}%`;
      sizeBar = characteristicBox;
      sizeScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Small</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Large</div>
        </div>
      );
    }
    if (characteristics.Width) {
      width = `Width: ${(((characteristics.Width.value) / 5) * 100).toFixed(1)}%`;
      widthBar = characteristicBox;
      widthScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Narrow</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Wide</div>
        </div>
      );
    }
    if (characteristics.Comfort) {
      comfort = `Comfort: ${(((characteristics.Comfort.value) / 5) * 100).toFixed(1)}%`;
      comfortBar = characteristicBox;
      comfortScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Uncomfortable</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Perfect</div>
        </div>
      );
    }
    if (characteristics.Quality) {
      quality = `Quality: ${(((characteristics.Quality.value) / 5) * 100).toFixed(1)}%`;
      qualityBar = characteristicBox;
      qualityScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Poor</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Perfect</div>
        </div>
      );
    }
    if (characteristics.Fit) {
      fit = `Fit: ${(((characteristics.Fit.value) / 5) * 100).toFixed(1)}%`;
      fitBar = characteristicBox;
      fitScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Tight</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}></div>
          <div className={styles.scaleRange}>Long</div>
        </div>
      );
    }
  }

  return (
    <div className={styles.characteristics}>
      <h3>Product Characteristics: </h3>
      <div>
        {size}
        {sizeBar}
        {sizeScale}
      </div>
      <div>
        {width}
        {widthBar}
        {widthScale}
      </div>
      <div>
        {comfort}
        {comfortBar}
        {comfortScale}
      </div>
      <div>
        {quality}
        {qualityBar}
        {qualityScale}
      </div>
      <div>
        {fit}
        {fitBar}
        {fitScale}
      </div>
    </div>
  );
};

export default ReviewCharacteristics;

// Notes and Experimentation:

// Need to get characteristics from data and display as slider
// Could have 5 separate divs as sliders based on percentage
