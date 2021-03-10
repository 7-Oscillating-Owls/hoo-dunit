import { shallow } from 'enzyme';
import React from 'react';

import QuestionsAndAnswers from '.';

xit('should exist', () => {
  const wrapper = shallow(<QuestionsAndAnswers />);
  expect(wrapper.exists()).toBe(true);
});
