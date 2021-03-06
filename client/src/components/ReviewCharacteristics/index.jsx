import React from 'react';

const ReviewCharacteristics = (props) => {
  const { metaObject } = props;
  return (
    <div>
      {
        // Need to get characteristics from data and display as slider
        // Could have 5 separate divs as sliders based on percentage
        // console.log('Meta object props: ' + metaObject)
        console.log('This is metaObjectcharacteristics: ', metaObject.characteristics)
      }
    </div>
  );
};

export default ReviewCharacteristics;
