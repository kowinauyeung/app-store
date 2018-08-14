/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Rating from './';

describe('Rating', () => {
  let mockVal = 0;
  const rating = shallow(<Rating value={mockVal} />)
  it('Bar with depends on value', () => {
    expect(rating.find('.rating-bar')).toHaveStyle('width', '0%');
    rating.setProps({ value: 5 });
    expect(rating.find('.rating-bar')).toHaveStyle('width', '100%');
    rating.setProps({ value: 2.5 });
    expect(rating.find('.rating-bar')).toHaveStyle('width', '50%');
  });
});
