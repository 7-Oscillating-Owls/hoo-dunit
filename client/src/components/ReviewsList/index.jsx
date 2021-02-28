import React from 'react';
import ReviewTiles from '../ReviewTiles';
import ReviewsAddForm from '../ReviewsAddForm';

import styles from './ReviewsList.css';

const ReviewsList = () => {
  const reviewsData = {
    results: [
      {
        review_id: 135436,
        rating: 3,
        summary: 'Cum veniam est.',
        recommend: true,
        response: '"Possimus provident asperiores et."',
        body: 'In enim non eveniet. Qui occaecati maiores sit aut earum ipsum. Rerum repellat voluptas non et quibusdam quae. Sit est velit porro sunt ipsam doloremque maxime et nostrum. Omnis voluptatem laboriosam sit qui.',
        date: '2020-08-26T00:00:00.000Z',
        reviewer_name: 'Jessica.Osinski18',
        helpfulness: 28,
        photos: [
          {
            id: 211851,
            url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          },
          {
            id: 211852,
            url: 'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          },
        ],
      },
      {
        review_id: 135420,
        rating: 2,
        summary: 'Aliquam fuga blanditiis enim quas velit.',
        recommend: true,
        response: '"Voluptate quia qui minus sed sed fugiat dolores vel."',
        body: 'Officiis doloribus sed aliquam. Quo velit minus voluptatum eum. Repellendus in distinctio excepturi esse error.',
        date: '2020-10-09T00:00:00.000Z',
        reviewer_name: 'Andres.Barton42',
        helpfulness: 27,
        photos: [
          {
            id: 211879,
            url: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          },
          {
            id: 211880,
            url: 'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80',
          },
        ],
      },
    ],
  };
  return (
    <div className={styles.reviewsList}>
      {
        // eslint-disable-next-line array-callback-return
        reviewsData.results.map((review) => {
          <ReviewTiles review={review} key={review.review_id} />;
        })
      }
      <ReviewsAddForm />
    </div>
  );
};

export default ReviewsList;
