import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import styles from './ReviewCharacteristics.css';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  let size;
  let sizePercentRender;
  let sizeBar;
  let sizeScale;
  let width;
  let widthPercentRender;
  let widthBar;
  let widthScale;
  let comfort;
  let comfortPercentRender;
  let comfortBar;
  let comfortScale;
  let quality;
  let qualityPercentRender;
  let qualityBar;
  let qualityScale;
  let fit;
  let fitPercentRender;
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
      const sizePercent = ((characteristics.Size.value) / 20).toFixed(1);
      sizePercentRender = (
        <GoTriangleDown
          style={{ transform: `translateX${sizePercent - 50}%)` }}
          className={styles.triangle}
          color="#75C0DC"
          size={25}
        />
      );
      sizeBar = characteristicBox;
      sizeScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Small</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Large</div>
        </div>
      );
    }
    if (characteristics.Width) {
      width = 'Width: ';
      const widthPercent = (((characteristics.Width.value) / 5) * 100).toFixed(1);
      widthPercentRender = (
        <GoTriangleDown
          style={{ transform: `translateX${widthPercent - 50}%)` }}
          className={styles.triangle}
          color="#75C0DC"
          size={25}
        />
      );
      widthBar = characteristicBox;
      widthScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Narrow</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Wide</div>
        </div>
      );
    }
    if (characteristics.Comfort) {
      comfort = 'Comfort: ';
      const comfortPercent = (((characteristics.Comfort.value) / 5) * 100).toFixed(1);
      comfortPercentRender = (
        <GoTriangleDown
          style={{ transform: `translateX(${comfortPercent - 50}%)` }}
          className={styles.triangle}
          color="#75C0DC"
          size={25}
        />
      );
      comfortBar = characteristicBox;
      comfortScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Uncomfortable</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Perfect</div>
        </div>
      );
    }
    if (characteristics.Quality) {
      quality = 'Quality: ';
      const qualityPercent = (((characteristics.Quality.value) / 5) * 100).toFixed(1);
      qualityPercentRender = (
        <GoTriangleDown
          style={{ transform: `translateX(${qualityPercent - 50}%)` }}
          className={styles.triangle}
          color="#75C0DC"
          size={25}
        />
      );
      qualityBar = characteristicBox;
      qualityScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Poor</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Perfect</div>
        </div>
      );
    }
    if (characteristics.Fit) {
      fit = 'Fit: ';
      const fitPercent = (((characteristics.Fit.value) / 5) * 100).toFixed(1);
      fitPercentRender = (
        <GoTriangleDown
          style={{ transform: `translateX(${fitPercent - 50}%)` }}
          className={styles.triangle}
          color="#75C0DC"
          size={25}
        />
      );
      fitBar = characteristicBox;
      fitScale = (
        <div className={styles.scale}>
          <div className={styles.scaleRange}>Tight</div>
          <div className={styles.scaleRange}> </div>
          <div className={styles.scaleRange}>Perfect</div>
          <div className={styles.scaleRange}> </div>
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
        {sizePercentRender}
        {sizeBar}
        {sizeScale}
      </div>
      <div>
        {width}
        {widthPercentRender}
        {widthBar}
        {widthScale}
      </div>
      <div>
        {comfort}
        {comfortPercentRender}
        {comfortBar}
        {comfortScale}
      </div>
      <div>
        {quality}
        {qualityPercentRender}
        {qualityBar}
        {qualityScale}
      </div>
      <div>
        {fit}
        {fitPercentRender}
        {fitBar}
        {fitScale}
      </div>
    </div>
  );
};

export default ReviewCharacteristics;
