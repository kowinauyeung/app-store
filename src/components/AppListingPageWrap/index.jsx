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

const pageItem = 10;
const maxItem = 100;

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
  constructor() {
    super();
    this.appListingContiner = null;
    this.appListingScrollWrap = null;
    this.enableScroll = true;
    this.state = {
      page: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const {
      fetchRecommendedList,
      fetchTopList,
      recommendedList,
      topList,
    } = this.props;
    if (recommendedList === null) fetchRecommendedList();
    if (topList === null) fetchTopList();
    this.appListingContiner.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.appListingContiner.removeEventListener('scroll', this.handleScroll);
  }

  nextPage() {
    const { page } = this.state;
    const maxPage = maxItem / pageItem;
    this.setState({
      page: Math.min((page + 1), maxPage),
    });
  }

  handleScroll() {
    if (!this.enableScroll) return;
    const wrapperHeight = this.appListingContiner.getBoundingClientRect().height - 46;
    const contentHeight = this.appListingScrollWrap.getBoundingClientRect().height;
    const wrapperScrollTop = this.appListingContiner.scrollTop;
    if ((contentHeight - wrapperScrollTop) <= wrapperHeight) {
      this.enableScroll = false;
      setTimeout(() => {
        this.nextPage();
        this.enableScroll = true;
      }, 300);
    }
  }

  render() {
    const {
      search,
      recommended,
      recommendedList,
      top,
      topList,
      filter,
    } = this.props;
    const { page } = this.state;
    return (
      <div className="app-listing-page-wrap">
        <div className="search-bar-container">
          <SearchBar onChange={(val) => { search(val); }} />
        </div>
        <div className="app-listing-container" ref={(ref) => { this.appListingContiner = ref; }}>
          <div
            className="app-listing-scroll-wrap"
            ref={(ref) => { this.appListingScrollWrap = ref; }}
          >
            <RecommendedList
              isFetching={recommended.isFetching}
              isFetchingFailed={recommended.isFetchingFailed}
              list={filterAppList(recommendedList, filter)}
            />
            <TopList
              isFetching={top.isFetching}
              isFetchingFailed={top.isFetchingFailed}
              list={(!topList) ? null : filterAppList(topList, filter).slice(0, page * pageItem)}
            />
          </div>
        </div>
      </div>
    );
  }
}

AppListingPageWrap.propTypes = propTypes;
AppListingPageWrap.defaultProps = defaultProps;

export default AppListingPageWrap;
