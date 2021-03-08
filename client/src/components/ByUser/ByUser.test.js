import { shallow } from 'enzyme';
import React from 'react';

import ByUser from '.';

it('should exist', () => {
  const wrapper = shallow(<ByUser />);
  expect(wrapper.exists()).toBe(true);
});
