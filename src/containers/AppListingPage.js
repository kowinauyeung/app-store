import { connect } from 'react-redux';
import { search, fetchRecommendedList, fetchTopList } from '../actions/actions';
import AppListingPageWrap from '../components/AppListingPageWrap';

const mapStateToProps = state => ({
  filter: state.apps.filter,
  recommended: {
    isFetching: state.apps.recommendedList.isFetching,
    isFetchingFailed: state.apps.recommendedList.isFetchingFailed,
  },
  recommendedList: (state.apps.recommendedList.data !== null)
    ? Object.keys(state.apps.recommendedList.data).map(k => state.apps.recommendedList.data[k])
    : null,
  top: {
    isFetching: state.apps.topList.isFetching,
    isFetchingFailed: state.apps.topList.isFetchingFailed,
  },
  topList: (state.apps.topList.data !== null)
    ? Object.keys(state.apps.topList.data).map(k => state.apps.topList.data[k])
    : null,
});

const mapDispatchToProps = ({
  search,
  fetchRecommendedList,
  fetchTopList,
});

const AppListingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppListingPageWrap);

export default AppListingPage;
