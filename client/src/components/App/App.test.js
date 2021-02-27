import { shallow, mount, render } from 'enzyme';
import React from 'react';

import App from '.';

test('App has only 1 element with className title', () => {
  const wrapper = shallow(<App />);
   expect(wrapper.find('.app').length).toBe(1);
});
