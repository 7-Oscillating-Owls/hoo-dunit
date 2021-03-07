import { shallow } from 'enzyme';
import React from 'react';


import Answerlisttwo from '.';


it('should exist', () => {
  const wrapper = shallow(<Answerlisttwo />);
  expect(wrapper.exists()).toBe(true);
});