import { shallow } from 'enzyme';
import React from 'react';

import QuestionModal from './index.jsx';



it('should exist', () => {
  const wrapper = shallow(<QuestionModal />);
  expect(wrapper.exists()).toBe(true);
});

// it('should have a question field, nickname field, email field', () => {
//   const wrapper = shallow(<QuestionModal />);
//   const questionField = wrapper.find('#questionField');
//   expect(questionField.exists()).toBe(true);
//   const nicknameField = wrapper.find('#questionNickname');
//   expect(nicknameField.exists()).toBe(true);
//   const emailField = wrapper.find('#questionEmail');
//   expect(emailField.exists()).toBe(true);
// });