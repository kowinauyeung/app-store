import fetchJsonp from 'fetch-jsonp';
import actionTypes from './actionTypes';

export const search = val => ({
  type: actionTypes.SET_FILTER,
  filter: val !== '' ? val : null,
});

export const startFetching = list => ({
  type: actionTypes.START_FETCHING_DATA,
  list,
});

export const endFetching = (list, success) => ({
  type: actionTypes.END_FETCHING_DATA,
  list,
  success,
});

export const setRecommendedList = list => ({
  type: actionTypes.SET_RECOMMENDED_LIST,
  list,
});

export const setTopList = list => ({
  type: actionTypes.SET_TOP_LIST,
  list,
});

const shapeList = (list) => {
  const shapedList = {};
  list.forEach((app) => {
    const appId = app.id.attributes['im:id'];
    shapedList[appId] = {
      id: appId,
      name: app['im:name'].label,
      image: app['im:image'][app['im:image'].length - 1].label,
      category: app.category.attributes.label,
      summary: app.summary.label,
      author: app['im:artist'].label,
    };
  });
  return shapedList;
};

export const fetchRecommendedList = () => ((dispatch) => {
  dispatch(startFetching('recommended'));
  return fetch(process.env.REACT_APP_API_RECOMMENDED_LIST)
    .then((r) => {
      if (r.status !== 200) {
        dispatch(endFetching('recommended', false));
        return null;
      }
      return r.json();
    })
    .then((json) => {
      if (json === null) return;
      dispatch(endFetching('recommended', true));
      dispatch(setRecommendedList(shapeList(json.feed.entry)));
    });
});

export const fetchTopList = () => ((dispatch) => {
  dispatch(startFetching('top'));
  return fetch('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
    .then((r) => {
      if (r.status !== 200) {
        dispatch(endFetching('top', false));
        return null;
      }
      return r.json();
    })
    .then((json) => {
      if (json === null) return;
      const topList = shapeList(json.feed.entry);
      const ids = Object.keys(topList).join(',');
      fetchJsonp(`${process.env.REACT_APP_API_APP_LOOK_UP}?id=${ids}`)
        .then((r) => {
          if (!r.ok) {
            dispatch(endFetching('top', false));
            return null;
          }
          return r.json();
        })
        .then((apps) => {
          if (apps === null) return;
          apps.results.forEach((app) => {
            topList[app.trackId].averageUserRating = app.averageUserRating;
            topList[app.trackId].userRatingCount = app.userRatingCount;
          });
          dispatch(endFetching('top', true));
          dispatch(setTopList(topList));
        });
    });
});
