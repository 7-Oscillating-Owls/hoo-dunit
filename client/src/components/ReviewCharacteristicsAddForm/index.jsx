/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

class ReviewCharacteristicsAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeID: '',
      widthID: '',
      comfortID: '',
      qualityID: '',
      lengthID: '',
      fitID: '',
    }
  }

  render() {
    const {
      handleChange,
      characteristicNames,
      characteristicIds,
    } = this.props;
    console.log('This is characteristic names: ', characteristicNames);
    console.log('This is characteristic id: ', characteristicIds);
    let sizeRender;
    let widthRender;
    let comfortRender;
    let qualityRender;
    let lengthRender;
    let fitRender;

    characteristicNames.forEach((name) => {
      console.log('This is name: ', name);
      if (name === 'Size') {
        sizeRender = (
          <div>
            <h5>Size: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="size1" name="size" value="1" />
              <label htmlFor="size1"> 1 - A size too small </label>
              <input type="radio" id="size2" name="size" value="2" />
              <label htmlFor="size2"> 2 - Half size too small </label>
              <input type="radio" id="size3" name="size" value="3" />
              <label htmlFor="size3"> 3 - Perfect </label>
              <input type="radio" id="size4" name="size" value="4" />
              <label htmlFor="size4"> 4 - Half size too big </label>
              <input type="radio" id="5" name="size" value="5" />
              <label htmlFor="5"> 5 - A size too big </label>
            </div>
          </div>
        );
      }
      if (name === 'Width') {
        widthRender = (
          <div>
            <h5>Width: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="width1" name="width" value="1" />
              <label htmlFor="width1"> 1 - Too narrow </label>
              <input type="radio" id="width2" name="width" value="2" />
              <label htmlFor="width2"> 2 - Slightly narrow </label>
              <input type="radio" id="width3" name="width" value="3" />
              <label htmlFor="width3"> 3 - Perfect </label>
              <input type="radio" id="width4" name="width" value="4" />
              <label htmlFor="width4"> 4 - Slightly wide </label>
              <input type="radio" id="width5" name="width" value="5" />
              <label htmlFor="width5"> 5 - Too wide </label>
            </div>
          </div>
        );
      }
      if (name === 'Comfort') {
        comfortRender = (
          <div>
            <h5>Comfort: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="comfort1" name="comfort" value="1" />
              <label htmlFor="comfort1"> 1 - Uncomfortable </label>
              <input type="radio" id="comfort2" name="comfort" value="2" />
              <label htmlFor="comfort2"> 2 - Slightly uncomfortable </label>
              <input type="radio" id="comfort3" name="comfort" value="3" />
              <label htmlFor="comfort3"> 3 - Okay </label>
              <input type="radio" id="comfort4" name="comfort" value="4" />
              <label htmlFor="comfort4"> 4 - Comfortable </label>
              <input type="radio" id="comfort5" name="comfort" value="5" />
              <label htmlFor="comfort5"> 5 - Perfect </label>
            </div>
          </div>
        );
      }
      if (name === 'Quality') {
        qualityRender = (
          <div>
            <h5>Quality: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="quality1" name="quality" value="1" />
              <label htmlFor="quality1"> 1 - Poor </label>
              <input type="radio" id="quality2" name="quality" value="2" />
              <label htmlFor="quality2"> 2 - Below Average </label>
              <input type="radio" id="quality3" name="quality" value="3" />
              <label htmlFor="quality3"> 3 - What I expected </label>
              <input type="radio" id="quality4" name="quality" value="4" />
              <label htmlFor="quality4"> 4 - Pretty great </label>
              <input type="radio" id="quality5" name="quality" value="5" />
              <label htmlFor="quality5"> 5 - Perfect </label>
            </div>
          </div>
        );
      }
      if (name === 'Length') {
        lengthRender = (
          <div>
            <h5>Length: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="productLength1" name="productLength" value="1" />
              <label htmlFor="productLength1"> 1 - Runs short </label>
              <input type="radio" id="productLength2" name="productLength" value="2" />
              <label htmlFor="productLength2"> 2 - Runs slightly short </label>
              <input type="radio" id="productLength3" name="productLength" value="3" />
              <label htmlFor="productLength3"> 3 - Perfect </label>
              <input type="radio" id="productLength4" name="productLength" value="4" />
              <label htmlFor="productLength4"> 4 - Runs slightly long </label>
              <input type="radio" id="productLength5" name="productLength" value="5" />
              <label htmlFor="productLength5"> 5 - Runs long </label>
            </div>
          </div>
        );
      }
      if (name === 'Fit') {
        fitRender = (
          <div>
            <h5>Fit: </h5>
            <div onChange={this.handleChange}>
              <input type="radio" id="fit1" name="fit" value="1" />
              <label htmlFor="fit1"> 1 - Runs tight </label>
              <input type="radio" id="fit2" name="fit" value="2" />
              <label htmlFor="fit2"> 2 - Runs slightly tight </label>
              <input type="radio" id="fit3" name="fit" value="3" />
              <label htmlFor="fit3"> 3 - Perfect </label>
              <input type="radio" id="fit4" name="fit" value="4" />
              <label htmlFor="fit4"> 4 - Runs slightly long </label>
              <input type="radio" id="fit5" name="fit" value="5" />
              <label htmlFor="fit5"> 5 - Runs long </label>
            </div>
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
  }
}



// <h4>Characteristics:</h4>
//           <h5>Size: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="size1" name="size" value="1" />
//             <label htmlFor="size1"> 1 - A size too small </label>
//             <input type="radio" id="size2" name="size" value="2" />
//             <label htmlFor="size2"> 2 - Half size too small </label>
//             <input type="radio" id="size3" name="size" value="3" />
//             <label htmlFor="size3"> 3 - Perfect </label>
//             <input type="radio" id="size4" name="size" value="4" />
//             <label htmlFor="size4"> 4 - Half size too big </label>
//             <input type="radio" id="5" name="size" value="5" />
//             <label htmlFor="5"> 5 - A size too big </label>
//           </div>
//           <br />
//           <h5>Width: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="width1" name="width" value="1" />
//             <label htmlFor="width1"> 1 - Too narrow </label>
//             <input type="radio" id="width2" name="width" value="2" />
//             <label htmlFor="width2"> 2 - Slightly narrow </label>
//             <input type="radio" id="width3" name="width" value="3" />
//             <label htmlFor="width3"> 3 - Perfect </label>
//             <input type="radio" id="width4" name="width" value="4" />
//             <label htmlFor="width4"> 4 - Slightly wide </label>
//             <input type="radio" id="width5" name="width" value="5" />
//             <label htmlFor="width5"> 5 - Too wide </label>
//           </div>
//           <br />
//           <h5>Comfort: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="comfort1" name="comfort" value="1" />
//             <label htmlFor="comfort1"> 1 - Uncomfortable </label>
//             <input type="radio" id="comfort2" name="comfort" value="2" />
//             <label htmlFor="comfort2"> 2 - Slightly uncomfortable </label>
//             <input type="radio" id="comfort3" name="comfort" value="3" />
//             <label htmlFor="comfort3"> 3 - Okay </label>
//             <input type="radio" id="comfort4" name="comfort" value="4" />
//             <label htmlFor="comfort4"> 4 - Comfortable </label>
//             <input type="radio" id="comfort5" name="comfort" value="5" />
//             <label htmlFor="comfort5"> 5 - Perfect </label>
//           </div>
//           <br />
//           <h5>Quality: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="quality1" name="quality" value="1" />
//             <label htmlFor="quality1"> 1 - Poor </label>
//             <input type="radio" id="quality2" name="quality" value="2" />
//             <label htmlFor="quality2"> 2 - Below Average </label>
//             <input type="radio" id="quality3" name="quality" value="3" />
//             <label htmlFor="quality3"> 3 - What I expected </label>
//             <input type="radio" id="quality4" name="quality" value="4" />
//             <label htmlFor="quality4"> 4 - Pretty great </label>
//             <input type="radio" id="quality5" name="quality" value="5" />
//             <label htmlFor="quality5"> 5 - Perfect </label>
//           </div>
//           <br />
//           <h5>Length: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="productLength1" name="productLength" value="1" />
//             <label htmlFor="productLength1"> 1 - Runs short </label>
//             <input type="radio" id="productLength2" name="productLength" value="2" />
//             <label htmlFor="productLength2"> 2 - Runs slightly short </label>
//             <input type="radio" id="productLength3" name="productLength" value="3" />
//             <label htmlFor="productLength3"> 3 - Perfect </label>
//             <input type="radio" id="productLength4" name="productLength" value="4" />
//             <label htmlFor="productLength4"> 4 - Runs slightly long </label>
//             <input type="radio" id="productLength5" name="productLength" value="5" />
//             <label htmlFor="productLength5"> 5 - Runs long </label>
//           </div>
//           <br />
//           <h5>Fit: </h5>
//           <div onChange={this.handleChange}>
//             <input type="radio" id="fit1" name="fit" value="1" />
//             <label htmlFor="fit1"> 1 - Runs tight </label>
//             <input type="radio" id="fit2" name="fit" value="2" />
//             <label htmlFor="fit2"> 2 - Runs slightly tight </label>
//             <input type="radio" id="fit3" name="fit" value="3" />
//             <label htmlFor="fit3"> 3 - Perfect </label>
//             <input type="radio" id="fit4" name="fit" value="4" />
//             <label htmlFor="fit4"> 4 - Runs slightly long </label>
//             <input type="radio" id="fit5" name="fit" value="5" />
//             <label htmlFor="fit5"> 5 - Runs long </label>
//           </div>

export default ReviewCharacteristicsAddForm;
