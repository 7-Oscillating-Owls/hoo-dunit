import { shallow } from 'enzyme';
import React from 'react';

import Answerlist from '.';

xit('should exist', () => {
  const wrapper = shallow(<Answerlist />);
  expect(wrapper.exists()).toBe(true);
});
