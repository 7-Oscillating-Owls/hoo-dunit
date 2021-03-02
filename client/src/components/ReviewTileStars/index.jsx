import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewTileStars = () => (
  <div>
    {[...Array(5)].map((star) => <FaStar size={10} key={star} />)}
  </div>
);

export default ReviewTileStars;
