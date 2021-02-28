import React from 'react';
import { shallow } from 'enzyme';
import Overview from '.';
import ImageGallery from '../ImageGallery';

it('should render ImageGallery', () => {
  const wrapper = shallow(<Overview />);
  const imageGallery = wrapper.find(ImageGallery);
  expect(imageGallery.exists()).toBe(true);
});
