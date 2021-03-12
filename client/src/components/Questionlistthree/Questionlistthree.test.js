import React from 'react';
import { shallow } from 'enzyme';
import QuestionListthree from '.';
import dummyQuestions from '../../../../data/dummyDataQuestions';

it('should exist', () => {
  const wrapper = shallow(<QuestionListthree question={dummyQuestions} />);
  expect(wrapper.exists()).toBe(true);
});