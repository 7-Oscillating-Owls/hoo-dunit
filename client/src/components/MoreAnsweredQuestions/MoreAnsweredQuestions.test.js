import { shallow } from 'enzyme';
import React from 'react';

import MoreAnsweredQuestions from '.';

it('should exist', () => {
  const wrapper = shallow(<MoreAnsweredQuestions />);
  expect(wrapper.exists()).toBe(true);
});
