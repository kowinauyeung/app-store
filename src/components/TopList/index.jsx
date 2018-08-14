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
    averageUserRating: PropTypes.number,
    userRatingCount: PropTypes.number,
  })),
};

const defaultProps = {
  list: null,
};

function TopList(props) {
  const { list } = props;
  return (
    <div className="top-list">
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
    </div>
  );
}

TopList.propTypes = propTypes;
TopList.defaultProps = defaultProps;

export default TopList;
