import { shallow } from 'enzyme';
import React from 'react';

import QATitle from '.';

it('should exist', () => {
  const wrapper = shallow(<QATitle />);
  expect(wrapper.exists()).toBe(true);
});
