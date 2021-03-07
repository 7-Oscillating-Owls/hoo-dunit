import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import styles from './ReviewCharacteristics.css';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  let size;
  let sizePercent;
  let sizeBar;
  let sizeScale;
  let width;
  let widthPercent;
  let widthBar;
  let widthScale;
  let comfort;
  let comfortPercent;
  let comfortBar;
  let comfortScale;
  let quality;
  let qualityPercent;
  let qualityBar;
  let qualityScale;
  let fit;
  let fitPercent;
  let fitBar;
  let fitScale;
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
    const characteristics = metaObject.characteristics;
    if (characteristics.Size) {
      size = 'Size: ';
      sizePercent = ((characteristics.Size.value) / 20).toFixed(1);
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
      width = 'Width: ';
      widthPercent = (((characteristics.Width.value) / 5) * 100).toFixed(1);
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
      comfort = 'Comfort: ';
      // <GoTriangleDown color="#75C0DC" />
      comfortPercent = (
        <div>
          <div>{(((characteristics.Comfort.value) / 5) * 100).toFixed(1)}</div>
          <input type="range" className={styles.slider} min="0" max="100" step="5" value={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
          <GoTriangleDown className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
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
      quality = 'Quality: ';
      qualityPercent = (((characteristics.Quality.value) / 5) * 100).toFixed(1);
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
      fit = 'Fit: ';
      fitPercent = (((characteristics.Fit.value) / 5) * 100).toFixed(1);
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
        {sizePercent}
        {sizeBar}
        {sizeScale}
      </div>
      <div>
        {width}
        {widthPercent}
        {widthBar}
        {widthScale}
      </div>
      <div>
        {comfort}
        {comfortPercent}
        {comfortBar}
        {comfortScale}
      </div>
      <div>
        {quality}
        {qualityPercent}
        {qualityBar}
        {qualityScale}
      </div>
      <div>
        {fit}
        {fitPercent}
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
