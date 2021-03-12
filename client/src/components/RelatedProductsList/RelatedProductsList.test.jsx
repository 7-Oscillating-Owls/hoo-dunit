import React from 'react';
import { shallow } from 'enzyme';

import RelatedProductsList from '.';
import styles from './RelatedProductsList.css';

describe('<RelatedProductsList />', () => {
  const list = shallow(
    <RelatedProductsList
      sizeOfScroll={270}
    >
      <div className='testChild' style={{ width: '2000px', height: '10px' }} />
    </RelatedProductsList>
  );

  it('renders a `.relatedProductList`', () => {
    const carousel = list.find('.carousel');

    expect(list.find(`.${styles.relatedProductsList}`)).toHaveLength(1);
    expect(carousel).toHaveLength(1);
  });

  it('renders children when passed in', () => {
    expect(list.find('.testChild')).toHaveLength(1);
  });
});
