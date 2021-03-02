import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewsAverageOverviewStars = (props) => {
  const { ratings } = props;
  const solidStars = Math.floor(ratings);
  let halfAndRemainingStars;
  const remainingStars = 4 - solidStars;
  if (solidStars !== ratings) {
    halfAndRemainingStars = <FaStarHalfAlt size={25} />;
  } else {
    halfAndRemainingStars = <FaRegStar size={25} />;
  }

  return (
    <div>
      {
        [...Array(solidStars)].map(() => <FaStar size={25} />)
      }
      {halfAndRemainingStars}
      {
        [...Array(remainingStars)].map(() => <FaRegStar size={25} />)
      }
    </div>
  );
};

export default ReviewsAverageOverviewStars;
