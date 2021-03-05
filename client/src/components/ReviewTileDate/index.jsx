import React from 'react';

const ReviewTileDate = (props) => {
  const { date } = props;
  const monthOptions = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
  const newDate = new Date(date);
  const monthNumber = newDate.getMonth();
  const month = monthOptions[monthNumber];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <span>{formattedDate}</span>
  );
};

export default ReviewTileDate;
