import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const remainingStars = 5 - ratings;
  return (
    <div>
      {[...Array(ratings)].map((star) => <FaStar size={20} color="#F5618E" key={star} />)}
      {[...Array(remainingStars)].map((star) => <FaRegStar size={20} color="#F5618E" key={star} />)}
    </div>
  );
};

export default ReviewTileStars;
