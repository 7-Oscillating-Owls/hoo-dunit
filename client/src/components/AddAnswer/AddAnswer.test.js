import { shallow } from 'enzyme';
import React from 'react';

import AddAnswer from '.';

it('should exist', () => {
  const wrapper = shallow(<AddAnswer />);
  expect(wrapper.exists()).toBe(true);
});
