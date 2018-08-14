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

  const topList = shallow(
    <TopList
      list={mockAppList}
      isFetching={false}
      isFetchingFailed={false}
    />
  );

  it('AppBoxes to be rendered', () => {
    expect(topList.find('AppBox').length).toBe(3);
    mockAppList.push({
      id: '4',
      name: 'name4',
      image: 'http://example.com/img4',
      category: 'cat4',
    });
    topList.setProps({ list: mockAppList });
    expect(topList.find('AppBox').length).toBe(4);
    mockAppList.pop();
    topList.setProps({ list: mockAppList });
    expect(topList.find('AppBox').length).toBe(3);
  });

  it('Loading spinner to be rendered if feteching data', () => {
    topList.setProps({ isFetching: true });
    expect(topList.find('LoadingSpinner')).toExist();
  });

  it('Network error text to be rendered if feteching data failed', () => {
    topList.setProps({ isFetching: false, isFetchingFailed: true });
    const errText = topList.find('.top-list-error-text');
    expect(errText).toExist();
    expect(errText).toHaveText('Network error');
  });
});
