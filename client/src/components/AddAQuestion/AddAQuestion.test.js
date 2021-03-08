import { shallow } from 'enzyme';
import React from 'react';

import AddAQuestion from '.';

it('should exist', () => {
  const wrapper = shallow(<AddAQuestion />);
  expect(wrapper.exists()).toBe(true);
});
