/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import TopList from './';

describe('TopList', () => {
  let mockAppList = [
    {
      id: '1',
      name: 'name1',
      image: 'http://example.com/img1',
      category: 'cat1',
      averageUserRating: 2,
      userRatingCount: 199,
    },
    {
      id: '2',
      name: 'name2',
      image: 'http://example.com/img2',
      category: 'cat2',
      averageUserRating: 2,
      userRatingCount: 199,
    },
    {
      id: '3',
      name: 'name3',
      image: 'http://example.com/img3',
      category: 'cat3',
      averageUserRating: 2,
      userRatingCount: 199,
    },
  ];
  const recommendedList = shallow(<TopList list={mockAppList} />);
  it('AppBoxes to be rendered', () => {
    expect(recommendedList.find('AppBox').length).toBe(3);
    mockAppList.push({
      id: '4',
      name: 'name4',
      image: 'http://example.com/img4',
      category: 'cat4',
    });
    recommendedList.setProps({ list: mockAppList });
    expect(recommendedList.find('AppBox').length).toBe(4);
    mockAppList.pop();
    recommendedList.setProps({ list: mockAppList });
    expect(recommendedList.find('AppBox').length).toBe(3);
  });
});
