import React from 'react';
import { shallow } from 'enzyme';
import QuestionListtwo from '.';
import dummyQuestions from '../../../../data/dummyDataQuestions';

it('should exist', () => {
  const wrapper = shallow(<QuestionListtwo question={dummyQuestions} />);
  expect(wrapper.exists()).toBe(true);
});