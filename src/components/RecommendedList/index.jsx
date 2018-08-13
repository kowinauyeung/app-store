import React from 'react';
import PropTypes from 'prop-types';
import AppBox from '../AppBox';
import './index.css';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
  })),
};

const defaultProps = {
  list: null,
};

function RecommendedList(props) {
  const { list } = props;
  return (
    <div className="recommended-list">
      <h3>
        推介
      </h3>
      <div className="recommended-app-list-wrap">
        <ul className="recommended-app-list">
          {
            list && list.map(app => (
              <li key={app.id}>
                <AppBox app={app} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

RecommendedList.propTypes = propTypes;
RecommendedList.defaultProps = defaultProps;

export default RecommendedList;
