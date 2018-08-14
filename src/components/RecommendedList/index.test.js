/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import RecommendedList from './';

describe('RecommendedList', () => {
  let mockAppList = [
    {
      id: '1',
      name: 'name1',
      image: 'http://example.com/img1',
      category: 'cat1',
    },
    {
      id: '2',
      name: 'name2',
      image: 'http://example.com/img2',
      category: 'cat2',
    },
    {
      id: '3',
      name: 'name3',
      image: 'http://example.com/img3',
      category: 'cat3',
    },
  ];

  const recommendedList = shallow(
    <RecommendedList
      list={mockAppList}
      isFetching={false}
      isFetchingFailed={false}
    />
  );

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

  it('Loading spinner to be rendered if feteching data', () => {
    recommendedList.setProps({ isFetching: true });
    expect(recommendedList.find('LoadingSpinner')).toExist();
  });

  it('Network error text to be rendered if feteching data failed', () => {
    recommendedList.setProps({ isFetching: false, isFetchingFailed: true });
    const errText = recommendedList.find('.recommended-list-error-text');
    expect(errText).toExist();
    expect(errText).toHaveText('Network error');
  });

  it('No result text to be rendered if no result', () => {
    recommendedList.setProps({ isFetching: false, isFetchingFailed: false, list: [] });
    const errText = recommendedList.find('.recommended-list-no-result-text');
    expect(errText).toExist();
    expect(errText).toHaveText('No result.');
  });
});
