import { shallow } from 'enzyme';
import React from 'react';

import AnswerHelpful from '.';

it('should exist', () => {
  const wrapper = shallow(<AnswerHelpful />);
  expect(wrapper.exists()).toBe(true);
});
