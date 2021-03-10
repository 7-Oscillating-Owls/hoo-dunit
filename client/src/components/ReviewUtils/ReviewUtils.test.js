import { getAverageRating, getRecommendPercent } from '.';

test('test average rating function', () => {
  const metaData = {
    ratings: {
      1: 4,
      2: 3,
      3: 8,
      4: 5,
      5: 9,
    },
  };

  const result = getAverageRating(metaData);
  expect(result.starRating).toBe('3.4');
  expect(
    result.fiveStarTotal
    + result.fourStarTotal
    + result.threeStarTotal
    + result.twoStarTotal
    + result.oneStarTotal
  ).toBe(29);
});

test('test reommend percent', () => {
  const metaData = {
    recommended: {
      true: 20,
      false: 20,
    },
  };

  const result = getRecommendPercent(metaData);
  expect(result.recommendPercent).toBe('50.00');
  expect(result.totalNumberOfStars).toBe(40);
});
