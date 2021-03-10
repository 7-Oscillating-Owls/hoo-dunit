/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const ReviewCharacteristicsAddForm = (props) => {
  const {
    characteristicNames,
    characteristicIds,
    handleAddCharacteristics,
  } = props;
  let sizeRender;
  let widthRender;
  let comfortRender;
  let qualityRender;
  let lengthRender;
  let fitRender;

  characteristicNames.forEach((name, index) => {
    if (name === 'Size') {
      sizeRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Size: </h5>
          <input required type="radio" id="size1" name="Size" value="1" />
          <label htmlFor="size1"> 1 - A size too small </label>
          <input required type="radio" id="size2" name="Size" value="2" />
          <label htmlFor="size2"> 2 - Half size too small </label>
          <input required type="radio" id="size3" name="Size" value="3" />
          <label htmlFor="size3"> 3 - Perfect </label>
          <input required type="radio" id="size4" name="Size" value="4" />
          <label htmlFor="size4"> 4 - Half size too big </label>
          <input required type="radio" id="5" name="Size" value="5" />
          <label htmlFor="5"> 5 - A size too big </label>
        </div>
      );
    }
    if (name === 'Width') {
      widthRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Width: </h5>
          <input required type="radio" id="width1" name="Width" value="1" />
          <label htmlFor="width1"> 1 - Too narrow </label>
          <input required type="radio" id="width2" name="Width" value="2" />
          <label htmlFor="width2"> 2 - Slightly narrow </label>
          <input required type="radio" id="width3" name="Width" value="3" />
          <label htmlFor="width3"> 3 - Perfect </label>
          <input required type="radio" id="width4" name="Width" value="4" />
          <label htmlFor="width4"> 4 - Slightly wide </label>
          <input required type="radio" id="width5" name="Width" value="5" />
          <label htmlFor="width5"> 5 - Too wide </label>
        </div>
      );
    }
    if (name === 'Comfort') {
      comfortRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Comfort: </h5>
          <input required type="radio" id="comfort1" name="Comfort" value="1" />
          <label htmlFor="comfort1"> 1 - Uncomfortable </label>
          <input required type="radio" id="comfort2" name="Comfort" value="2" />
          <label htmlFor="comfort2"> 2 - Slightly uncomfortable </label>
          <input required type="radio" id="comfort3" name="Comfort" value="3" />
          <label htmlFor="comfort3"> 3 - Okay </label>
          <input required type="radio" id="comfort4" name="Comfort" value="4" />
          <label htmlFor="comfort4"> 4 - Comfortable </label>
          <input required type="radio" id="comfort5" name="Comfort" value="5" />
          <label htmlFor="comfort5"> 5 - Perfect </label>
        </div>
      );
    }
    if (name === 'Quality') {
      qualityRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Quality: </h5>
          <input required type="radio" id="quality1" name="Quality" value="1" />
          <label htmlFor="quality1"> 1 - Poor </label>
          <input required type="radio" id="quality2" name="Quality" value="2" />
          <label htmlFor="quality2"> 2 - Below Average </label>
          <input required type="radio" id="quality3" name="Quality" value="3" />
          <label htmlFor="quality3"> 3 - What I expected </label>
          <input required type="radio" id="quality4" name="Quality" value="4" />
          <label htmlFor="quality4"> 4 - Pretty great </label>
          <input required type="radio" id="quality5" name="Quality" value="5" />
          <label htmlFor="quality5"> 5 - Perfect </label>
        </div>
      );
    }
    if (name === 'Length') {
      lengthRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Length: </h5>
          <input required type="radio" id="productLength1" name="Length" value="1" />
          <label htmlFor="productLength1"> 1 - Runs short </label>
          <input required type="radio" id="productLength2" name="Length" value="2" />
          <label htmlFor="productLength2"> 2 - Runs slightly short </label>
          <input required type="radio" id="productLength3" name="Length" value="3" />
          <label htmlFor="productLength3"> 3 - Perfect </label>
          <input required type="radio" id="productLength4" name="Length" value="4" />
          <label htmlFor="productLength4"> 4 - Runs slightly long </label>
          <input required type="radio" id="productLength5" name="Length" value="5" />
          <label htmlFor="productLength5"> 5 - Runs long </label>
        </div>
      );
    }
    if (name === 'Fit') {
      fitRender = (
        <div onChange={(event) => (
          handleAddCharacteristics(event, characteristicIds[index].id, name)
        )}
        >
          <h5>Fit: </h5>
          <input required type="radio" id="fit1" name="Fit" value="1" />
          <label htmlFor="fit1"> 1 - Runs tight </label>
          <input required type="radio" id="fit2" name="Fit" value="2" />
          <label htmlFor="fit2"> 2 - Runs slightly tight </label>
          <input required type="radio" id="fit3" name="Fit" value="3" />
          <label htmlFor="fit3"> 3 - Perfect </label>
          <input required type="radio" id="fit4" name="Fit" value="4" />
          <label htmlFor="fit4"> 4 - Runs slightly long </label>
          <input required type="radio" id="fit5" name="Fit" value="5" />
          <label htmlFor="fit5"> 5 - Runs long </label>
        </div>
      );
    }
  });

  return (
    <div>
      {sizeRender}
      <br />
      {widthRender}
      <br />
      {comfortRender}
      <br />
      {qualityRender}
      <br />
      {lengthRender}
      <br />
      {fitRender}
      <br />
    </div>
  );
};

export default ReviewCharacteristicsAddForm;
