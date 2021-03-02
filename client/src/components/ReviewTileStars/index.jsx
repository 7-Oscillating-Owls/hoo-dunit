import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const remainingStars = 5 - ratings;
  return (
    <div>
      {[...Array(ratings)].map((star) => <FaStar size={10} key={star} />)}
      {[...Array(remainingStars)].map((star) => <FaRegStar size={10} key={star} />)}
    </div>
  );
};

export default ReviewTileStars;
