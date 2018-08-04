/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import AppBox from './';

describe('AppBox', () => {
  const app = {
    name: 'HK 01',
    image: 'http://www.example.com/imagepath',
    category: 'Games',
    averageUserRating: 4.5,
    userRatingCount: 100,
  };
  const appBox = shallow(<AppBox app={app} />);
  it('Classname depends on props', () => {
    appBox.setProps({ vertical: false });
    expect(appBox).toHaveClassName('horizontal');
    expect(appBox).not.toHaveClassName('vertical');
    appBox.setProps({ vertical: true });
    expect(appBox).toHaveClassName('vertical');
    expect(appBox).not.toHaveClassName('horizontal');
    appBox.setProps({ isCircleIcon: true });
    expect(appBox).toHaveClassName('circle-icon');
    appBox.setProps({ isCircleIcon: false });
    expect(appBox).not.toHaveClassName('circle-icon');
  });

  it('App info render correctly', () => {
    expect(appBox.find('img').props().src).toBe(app.image);
    expect(appBox.find('.app-box-name')).toHaveText(app.name);
    expect(appBox.find('.app-box-category')).toHaveText(app.category);
    // @TODO: add assertion of rating
  });
});
