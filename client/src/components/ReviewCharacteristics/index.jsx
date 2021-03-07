import React from 'react';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  let size;
  let width;
  let comfort;
  let quality;
  let fit;

  if (metaObject.characteristics) {
    console.log('This is metaObjectcharacteristics: ', metaObject.characteristics);
    const characteristics = metaObject.characteristics;
    if (characteristics.Size) {
      size = `Size: ${((characteristics.Size.value) / 5).toFixed(2) * 100}%`;
    } else {
      size = null;
    }
    if (characteristics.Width) {
      width = `Width: ${((characteristics.Width.value) / 5).toFixed(2) * 100}%`;
    } else {
      width = null;
    }
    if (characteristics.Comfort) {
      comfort = `Comfort: ${((characteristics.Comfort.value) / 5).toFixed(2) * 100}%`;
      console.log('This is comfort: ', comfort);
    } else {
      comfort = null;
    }
    if (characteristics.Quality) {
      quality = `Quality: ${((characteristics.Quality.value) / 5).toFixed(2) * 100}%`;
    } else {
      quality = null;
    }
    if (characteristics.Fit) {
      fit = `Characteristics: ${((characteristics.Fit.value) / 5).toFixed(2) * 100}%`;
    } else {
      fit = null;
    }
  }
  return (
    <div>
      <div>
        {size}
      </div>
      <div>
        {width}
      </div>
      <div>
        {comfort}
      </div>
      <div>
        {quality}
      </div>
      <div>
        {fit}
      </div>
    </div>
  );
};

export default ReviewCharacteristics;

// Notes and Experimentation:

// Need to get characteristics from data and display as slider
// Could have 5 separate divs as sliders based on percentage
// console.log('Meta object props: ' + metaObject);
// console.log('This is metaObjectcharacteristics: ', metaObject.characteristics);
