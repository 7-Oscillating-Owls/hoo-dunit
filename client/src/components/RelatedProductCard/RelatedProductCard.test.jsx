import React from 'react';
import { shallow } from 'enzyme';

import RelatedProductCard from '.';
import styles from './RelatedProductCard.css';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children, className }) => (
      <a href="#" className={className}>
        {children}
      </a>
    ),
  }
});

describe('<RelatedProductCard />', () => {
  const wrapper = shallow(
    <RelatedProductCard
      product={{
        id: 1,
        name: 'adadis megaboost',
        category: 'running shoes',
        description: 'run run run',
      }}
    >
      <span className="testChild" />
    </RelatedProductCard>
  );

  it('renders a `.relatedProductCard`', () => {
    const link = wrapper.find(`.${styles.productLink}`);

    expect(wrapper.find(`.${styles.relatedProductCard}`)).toHaveLength(1);
    expect(link.props().to).toMatch('/products/1');
  });

  it('renders a photo conditionally', () => {
    const cardWithPhoto = shallow(
      <RelatedProductCard
        product={{
          id: 1,
          name: 'adadis megaboost',
          category: 'running shoes',
          description: 'run run run',
          styles: [
            {
              photos: [{
                url: 'hello.gif',
              }],
            },
          ],
        }}
      >
        <span className="testChild" />
      </RelatedProductCard>
    );

    expect(cardWithPhoto.find('.productImage')).toHaveLength(1);
    expect(wrapper.find('.productImage')).toHaveLength(0);
  });

  it('renders children when passed in', () => {
    expect(wrapper.find('.testChild')).toHaveLength(1);
  });
});
