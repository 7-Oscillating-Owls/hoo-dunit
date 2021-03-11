import { getAverageRating, getRecommendPercent } from '.';

test('test ReviewUtils.getAverageRating', () => {
  const metaData = {
    ratings: {
      1: 4,
      2: 3,
      3: 8,
      4: 5,
      5: 9,
    },
  };

  const foursOnly = {
    ratings: {
      4: 5,
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
    + result.zeroStarTotal
  ).toBe(29);

  expect(getAverageRating(foursOnly).starRating).toBe('4.0');
});

test('test ReviewUitls.getRecommendPercent', () => {
  const metaData = {
    recommended: {
      true: 20,
      false: 20,
    },
  };

  const allRecommend = {
    recommended: {
      true: 1,
    },
  };

  const result = getRecommendPercent(metaData);
  expect(result.recommendPercent).toBe('50.00');
  expect(result.totalNumberOfStars).toBe(40);
  expect(getRecommendPercent(allRecommend)).toEqual({
    recommendPercent: '100.00',
    totalNumberOfStars: 1,
  });
});
