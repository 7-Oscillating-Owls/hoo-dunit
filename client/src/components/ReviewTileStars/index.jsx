/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const remainingStars = 5 - ratings;
  return (
    <div>
      {[...Array(ratings)].map((star, index) => <FaStar size={20} color="#F5618E" key={`Solid stars ${index}`} />)}
      {[...Array(remainingStars)].map((star, index) => <FaRegStar size={20} color="#F5618E" key={`Unfilled stars ${index}`} />)}
    </div>
  );
};

export default ReviewTileStars;
