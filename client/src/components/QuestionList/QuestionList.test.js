import React from 'react';
import { shallow } from 'enzyme';
import QuestionList from '.';
import dummyQuestions from '../../../../data/dummyDataQuestions';

it('should exist', () => {
  const wrapper = shallow(<QuestionList question={dummyQuestions} />);
  expect(wrapper.exists()).toBe(true);
});