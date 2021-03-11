import { shallow } from 'enzyme';
import React from 'react';
import dummyAnswers from '../../../../data/dummyDataAnswers';

import Answerlisttwo from '.';

xit('should exist', () => {
  const wrapper = shallow(<Answerlisttwo />);
  expect(wrapper.exists()).toBe(true);
});

it('should exist', () => {
  const wrapper = shallow(<Answerlisttwo answer={dummyAnswers} />);
  expect(wrapper.exists()).toBe(true);
});
