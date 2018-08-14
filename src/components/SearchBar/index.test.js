/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './';

describe('SearchBar', () => {
  const onChange = jest.fn();
  const searchBar = shallow(<SearchBar onChange={onChange} />);

  it('State change while input change', () => {
    const input = searchBar.find('input').first();
    const mockVal = 'This is an app name.';
    input.simulate('change', { target: { value: mockVal } });
    expect(searchBar.state('val')).toBe(mockVal);
    expect(searchBar.find('input').first()).toHaveValue(mockVal);
  });

  it('Callback onChange called when value change', () => {
    const input = searchBar.find('input').first();
    const mockVal = 'This is an app name.';
    input.simulate('change', { target: { value: mockVal } });
    expect(onChange).toBeCalledWith(mockVal);
  })
});
