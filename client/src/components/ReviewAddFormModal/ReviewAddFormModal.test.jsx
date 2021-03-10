import React from 'react';
import { shallow } from 'enzyme';

import ReviewAddFormModal from '.';

test('ReviewAddFormModal should exist', () => {
  const wrapper = shallow(<ReviewAddFormModal />);
  expect(wrapper.exists()).toBe(true);
});
