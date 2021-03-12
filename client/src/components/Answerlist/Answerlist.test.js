import { shallow } from 'enzyme';
import React from 'react';
import dummyAnswers from '../../../../data/dummyDataAnswers';

import Answerlist from '.';

it('should exist', () => {
  const wrapper = shallow(<Answerlist />);
  expect(wrapper.exists()).toBe(true);
});

it('should exist', () => {
  const wrapper = shallow(<Answerlist answer={dummyAnswers} />);
  expect(wrapper.exists()).toBe(true);
});
