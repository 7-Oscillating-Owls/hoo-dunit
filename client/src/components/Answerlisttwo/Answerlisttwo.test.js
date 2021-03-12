import { shallow } from 'enzyme';
import React from 'react';
import Answer from '../Answer';
import LoadMoreAnswers from '../LoadMoreAnswers'
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


// it('should exist', () => {
//   const wrapper = shallow(<Answer answer={dummyAnswers} />);
//   expect(wrapper.exists()).toBe(true);
// });

// it('should exist', () => {
//   const wrapper = shallow(<LoadMoreAnswers click={dummyAnswers} />);
//   expect(wrapper.exists()).toBe(true);
// });
// it('should display the answer text', () => {
//   const wrapper = shallow(<Answerlisttwo answer={dummyAnswers.results[0]} />);
//   expect(wrapper.find('.answer').text()).toContain('Quia dolor cum eligendi rem veniam ut dolorem similique.');
// });
