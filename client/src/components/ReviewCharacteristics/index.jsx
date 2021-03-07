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
        <div>
          <div>{sizePercent}</div>
          <input className={styles.slider} type="range" min="0" max="100" value={`${sizePercent}`} />
          <GoTriangleDown style={{ margin: `0% 0% 0% ${sizePercent - 50}%` }} className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
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
      const widthPercent = (((characteristics.Width.value) / 5) * 100).toFixed(1);
      widthPercentRender = (
        <div>
          <div>{widthPercent}</div>
          <input className={styles.slider} type="range" min="0" max="100" value={`${widthPercent}`} />
          <GoTriangleDown style={{ margin: `0% 0% 0% ${widthPercent - 50}%` }} className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
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
      const comfortPercent = (((characteristics.Comfort.value) / 5) * 100).toFixed(1);
      comfortPercentRender = (
        <div>
          <div>{comfortPercent}</div>
          <input className={styles.slider} type="range" min="0" max="100" value={`${comfortPercent}`} />
          <GoTriangleDown style={{ margin: `0% 0% 0% ${comfortPercent - 50}%` }} className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
      // document.getElementById('test').style.width = '70%';
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
      const qualityPercent = (((characteristics.Quality.value) / 5) * 100).toFixed(1);
      qualityPercentRender = (
        <div>
          <div>{qualityPercent}</div>
          <input className={styles.slider} type="range" min="0" max="100" value={`${qualityPercent}`} />
          <GoTriangleDown style={{ margin: `0% 0% 0% ${qualityPercent - 50}%` }} className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
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
      const fitPercent = (((characteristics.Fit.value) / 5) * 100).toFixed(1);
      fitPercentRender = (
        <div>
          <div>{fitPercent}</div>
          <input className={styles.slider} type="range" min="0" max="100" value={`${fitPercent}`} />
          <GoTriangleDown style={{ margin: `0% 0% 0% ${fitPercent - 50}%` }} className={styles.triangle} color="#75C0DC" size={25} data-width={(((characteristics.Comfort.value) / 5) * 100).toFixed(1)} />
        </div>
      );
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

// Notes and Experimentation:

// Need to get characteristics from data and display as slider
// Could have 5 separate divs as sliders based on percentage
