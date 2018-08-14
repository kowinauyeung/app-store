/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import AppListingPageWrap, { filterAppList } from './';

describe('AppListingPageWrap', () => {
  const mockProps = {
    search: jest.fn(),
    fetchRecommendedList: jest.fn(),
    fetchTopList: jest.fn(),
    recommended: {
      isFetching: false,
      isFetchingFailed: false,
    },
    top: {
      isFetching: false,
      isFetchingFailed: false,
    },
  };
  const mockAppList = [
    {
      id: 1,
      name: 'app 1',
      image: 'src1',
      category: 'category 1',
      summary: 'summary 1 all',
      author: 'author 1',
    },
    {
      id: 2,
      name: 'same name 1',
      image: 'src2',
      category: 'category 1 all',
      summary: 'summary 2',
      author: 'author 2',
    },
    {
      id: 3,
      name: 'same name 2',
      image: 'src3',
      category: 'category 3',
      summary: 'summary 3',
      author: 'author 3 all',
    },
    {
      id: 4,
      name: 'never match',
      image: 'src4',
      category: 'category 4',
      summary: 'summary 4',
      author: 'author 4',
    },
  ];

  const appListingPageWrap = mount(<AppListingPageWrap {...mockProps} />);

  it('Fetch while component mount', () => {
    expect(mockProps.fetchRecommendedList).toHaveBeenCalled();
    expect(mockProps.fetchTopList).toHaveBeenCalled();
  });

  it('Call nextPage will update max item', () => {
    const curPage = appListingPageWrap.state('page');
    appListingPageWrap.instance().nextPage();
    expect(appListingPageWrap.state('page')).toBe(curPage + 1);
  });

  it('Filter function works properly', () => {
    expect(filterAppList(mockAppList, null).length).toBe(4);
    expect(filterAppList(mockAppList, 'app 1').length).toBe(1);
    expect(filterAppList(mockAppList, 'app 1')[0].id).toBe(1);
    expect(filterAppList(mockAppList, 'all').length).toBe(3);
    expect(filterAppList(mockAppList, 'same name').length).toBe(2);
  });

  it('Search to be call when SearchBar change', () => {
    const searchBar = appListingPageWrap.find('SearchBar');
    const mockSearchValue = 'search value';
    searchBar.props().onChange(mockSearchValue);
    expect(mockProps.search).toBeCalledWith(mockSearchValue);
  });

});
