import { shallow } from 'enzyme';
import React from 'react';
import dummyAnswers from '../../../../data/dummyDataAnswers';

import Answerlist from '.';

it('should exist', () => {
  const wrapper = shallow(<Answerlist />);
  expect(wrapper.exists()).toBe(true);
});
