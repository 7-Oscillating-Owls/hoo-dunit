import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ReviewTileStars = (props) => {
  const { ratings } = props;
  const remainingStars = 5 - ratings;
  return (
    <div>
      {[...Array(ratings)].map(() => <FaStar size={20} color="#F5618E" key={`SolidStars${(Math.random() * 20)}`} />)}
      {[...Array(remainingStars)].map(() => <FaRegStar size={20} color="#F5618E" key={`UnfilledStars${(Math.random() * 20)}`} />)}
    </div>
  );
};

export default ReviewTileStars;
