import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const remainingStars = 5 - ratings;
  return (
    <span>
      {[...Array(ratings)].map((star) => <FaStar size={20} key={star} />)}
      {[...Array(remainingStars)].map((star) => <FaRegStar size={20} key={star} />)}
    </span>
  );
};

export default ReviewTileStars;
