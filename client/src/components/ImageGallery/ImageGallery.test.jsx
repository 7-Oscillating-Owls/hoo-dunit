import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from '.';
import dummyData from '../../../../data/styles';

describe('Image Gallery tests', () => {
  it('renders images', () => {
    const images = dummyData.results.filter((style) => (style['default?'] === true));

    const wrapper = shallow(<ImageGallery images={images} />);
    expect(wrapper.find('.image-items')).toBeDefined();
    expect(wrapper.find('.styleImage')).toHaveLength(images.length);
  });
});
