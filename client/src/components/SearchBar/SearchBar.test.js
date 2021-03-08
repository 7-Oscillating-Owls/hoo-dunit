import { shallow } from 'enzyme';
import React from 'react';

import SearchBar from '.';

it('should exist', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper.exists()).toBe(true);
});
