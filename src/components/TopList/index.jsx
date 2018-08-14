import React from 'react';
import PropTypes from 'prop-types';
import AppBox from '../AppBox';
import LoadingSpinner from '../LoadingSpinner';
import './index.css';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    averageUserRating: PropTypes.number,
    userRatingCount: PropTypes.number,
  })),
  isFetching: PropTypes.bool.isRequired,
  isFetchingFailed: PropTypes.bool.isRequired,
};

const defaultProps = {
  list: null,
};

function TopList(props) {
  const { list, isFetching, isFetchingFailed } = props;
  return (
    <div className="top-list">
      {
        (
          (isFetching) && (
            <div className="top-list-placeholder">
              <LoadingSpinner />
            </div>
          )
        )
        || (
          (isFetchingFailed) && (
            <div className="top-list-placeholder">
              <div className="top-list-error-text">
                Network error
              </div>
            </div>
          )
        )
        || (
          <ul className="top-app-list">
            {
              list && list.map((app, index) => (
                <li key={app.id} data-rank={index + 1}>
                  <AppBox
                    app={app}
                    vertical={false}
                    isCircleIcon={index % 2 !== 0}
                    showRating
                  />
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

TopList.propTypes = propTypes;
TopList.defaultProps = defaultProps;

export default TopList;
