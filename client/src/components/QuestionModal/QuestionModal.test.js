import { shallow } from 'enzyme';
import React from 'react';

import QuestionModal from '.';

it('should exist', () => {
  const wrapper = shallow(<QuestionModal />);
  expect(wrapper.exists()).toBe(true);
});
