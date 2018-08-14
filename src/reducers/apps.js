import actionTypes from '../actions/actionTypes';

const iniState = {
  recommendedList: {
    isFetching: false,
    isFetchingFailed: false,
    data: null,
  },
  topList: {
    isFetching: false,
    isFetchingFailed: false,
    data: null,
  },
  filter: null,
};

const apps = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case actionTypes.START_FETCHING_DATA:
      return {
        ...state,
        [`${action.list}List`]: {
          ...state[`${action.list}List`],
          isFetching: true,
        },
      };
    case actionTypes.END_FETCHING_DATA:
      return {
        ...state,
        [`${action.list}List`]: {
          ...state[`${action.list}List`],
          isFetching: false,
          isFetchingFailed: !action.success,
        },
      };
    case actionTypes.SET_RECOMMENDED_LIST:
      return {
        ...state,
        recommendedList: {
          ...state.recommendedList,
          data: action.list,
        },
      };
    case actionTypes.SET_TOP_LIST:
      return {
        ...state,
        topList: {
          ...state.topList,
          data: action.list,
        },
      };
    default:
      return state;
  }
};

export default apps;
