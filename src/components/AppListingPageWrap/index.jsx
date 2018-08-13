import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar';
import RecommendedList from '../RecommendedList';
import TopList from '../TopList';
import './index.css';

const propTypes = {
  search: PropTypes.func.isRequired,
  fetchRecommendedList: PropTypes.func.isRequired,
  fetchTopList: PropTypes.func.isRequired,
  filter: PropTypes.string,
  recommended: PropTypes.shape({
    isFetching: PropTypes.bool,
    isFetchingFailed: PropTypes.bool,
  }).isRequired,
  recommendedList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    summary: PropTypes.string,
    author: PropTypes.string,
  })),
  top: PropTypes.shape({
    isFetching: PropTypes.bool,
    isFetchingFailed: PropTypes.bool,
  }).isRequired,
  topList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    summary: PropTypes.string,
    author: PropTypes.string,
  })),
};

const defaultProps = {
  filter: null,
  recommendedList: null,
  topList: null,
};

const filterAppList = (list, filter) => {
  if (!list || !filter) return list;
  const fil = filter.toLocaleLowerCase();
  return list.filter(app => (
    app.name.toLocaleLowerCase().indexOf(fil) >= 0
    || app.category.toLocaleLowerCase().indexOf(fil) >= 0
    || app.author.toLocaleLowerCase().indexOf(fil) >= 0
    || app.summary.toLocaleLowerCase().indexOf(fil) >= 0
  ));
};

class AppListingPageWrap extends Component {
  componentDidMount() {
    const { fetchRecommendedList, fetchTopList } = this.props;
    fetchRecommendedList();
    fetchTopList();
  }

  render() {
    const {
      search,
      recommendedList,
      topList,
      filter,
    } = this.props;
    return (
      <div className="app-listing-page-wrap">
        <div className="search-bar-container">
          <SearchBar onChange={(val) => { search(val); }} />
        </div>
        <div className="app-listing-container">
          <RecommendedList list={filterAppList(recommendedList, filter)} />
          <TopList list={filterAppList(topList, filter)} />
        </div>
      </div>
    );
  }
}

AppListingPageWrap.propTypes = propTypes;
AppListingPageWrap.defaultProps = defaultProps;

export default AppListingPageWrap;
