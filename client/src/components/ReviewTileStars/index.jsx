import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const numberOfStars = Math.floor(ratings);
  const remainingStars = 5 - numberOfStars;
  return (
    <div>
      {[...Array(numberOfStars)].map((star) => <FaStar size={10} key={star} />)}
      {[...Array(remainingStars)].map((star) => <FaRegStar size={10} key={star} />)}
    </div>
  );
};

export default ReviewTileStars;
