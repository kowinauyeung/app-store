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
  })),
  isFetching: PropTypes.bool.isRequired,
  isFetchingFailed: PropTypes.bool.isRequired,
};

const defaultProps = {
  list: null,
};

function RecommendedList(props) {
  const { list, isFetching, isFetchingFailed } = props;
  return (
    <div className="recommended-list">
      <h3>
        推介
      </h3>
      <div className="recommended-app-list-wrap">
        {
          (
            (isFetching) && (
              <div className="recommended-list-placeholder">
                <LoadingSpinner />
              </div>
            )
          )
          || (
            (isFetchingFailed) && (
              <div className="recommended-list-placeholder">
                <div className="recommended-list-error-text">
                  Network error
                </div>
              </div>
            )
          )
          || (
            (!list || list.length <= 0) && (
              <div className="recommended-list-placeholder">
                <div className="recommended-list-no-result-text">
                  No result.
                </div>
              </div>
            )
          )
          || (
            <ul className="recommended-app-list">
              {
                list.map(app => (
                  <li key={app.id}>
                    <AppBox app={app} />
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}

RecommendedList.propTypes = propTypes;
RecommendedList.defaultProps = defaultProps;

export default RecommendedList;
