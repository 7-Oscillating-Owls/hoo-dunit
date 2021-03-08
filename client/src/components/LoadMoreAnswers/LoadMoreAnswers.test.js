import { shallow } from 'enzyme';
import React from 'react';

import LoadMoreAnswers from '.';

it('should exist', () => {
  const wrapper = shallow(<LoadMoreAnswers />);
  expect(wrapper.exists()).toBe(true);
});
