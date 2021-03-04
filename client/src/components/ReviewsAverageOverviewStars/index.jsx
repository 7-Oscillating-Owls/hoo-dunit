import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import styles from './ReviewsAverageOverviewStars.css';
// import images from '/static/images/';

const ReviewsAverageOverviewStars = (props) => {
  const { ratings } = props;
  const solidStars = Math.floor(ratings);
  const starDifference = ratings - solidStars;
  let partialStars;
  const remainingStars = 4 - solidStars;
  if (starDifference > 0 && starDifference <= 0.12) {
    // Unfilled star
    partialStars = <FaRegStar size={25} />;
  } else if (starDifference > 0.12 && starDifference <= 0.37) {
    // Quarter filled star
    partialStars = <FaRegStar size={5} />;
  } else if (starDifference > 0.37 && starDifference <= 0.62) {
    // Half filled star
    partialStars = <FaStarHalfAlt size={25} />;
  } else if (starDifference > 0.62 && starDifference <= 0.87) {
    // 3/4 filled star
    partialStars = <FaStarHalfAlt size={75} />;
  } else if (starDifference > 0.87 && starDifference < 1) {
    // Solid star
    partialStars = <FaStar size={25} />;
  } else {
    // Unfilled star
    partialStars = <FaRegStar size={25} />;
  }

  return (
    <div>
      {
        [...Array(solidStars)].map(() => <FaStar size={25} />)
      }
      {partialStars}
      {
        [...Array(remainingStars)].map(() => <FaRegStar size={25} />)
      }
      {/* <FaRegStar size={25} className={styles.testStar} /> */}
      {/* <img src={images.QuarterStar.png} alt="Quarter Star" /> */}
    </div>
  );
};

export default ReviewsAverageOverviewStars;

// Notes and experiments:

// const ReviewsAverageOverviewStars = (props) => {
//   const { ratings } = props;
//   const solidStars = Math.floor(ratings);
//   let halfAndRemainingStars;
//   const remainingStars = 4 - solidStars;
//   if (solidStars !== ratings) {
//     halfAndRemainingStars = <FaStarHalfAlt size={25} />;
//   } else {
//     halfAndRemainingStars = <FaRegStar size={25} />;
//   }

//   return (
//     <div>
//       {
//         [...Array(solidStars)].map(() => <FaStar size={25} />)
//       }
//       {halfAndRemainingStars}
//       {
//         [...Array(remainingStars)].map(() => <FaRegStar size={25} />)
//       }
//     </div>
//   );
// };
