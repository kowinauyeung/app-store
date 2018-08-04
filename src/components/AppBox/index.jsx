import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    averageUserRating: PropTypes.number,
    userRatingCount: PropTypes.number,
  }).isRequired,
  vertical: PropTypes.bool,
  isCircleIcon: PropTypes.bool,
};

const defaultProps = {
  vertical: true,
  isCircleIcon: false,
};

function AppBox(props) {
  const { app, vertical, isCircleIcon } = props;
  let className = 'app-box';
  if (!vertical) className += ' horizontal';
  else className += ' vertical';
  if (isCircleIcon) className += ' circle-icon';
  return (
    <div className={className}>
      <div className="app-box-img">
        <img src={app.image} alt={app.name} />
      </div>
      <div className="app-box-details">
        <div className="app-box-name">
          {app.name}
        </div>
        <div className="app-box-category">
          {app.category}
        </div>
        {
          // @TODO: add rating ui
        }
      </div>
    </div>
  );
}

AppBox.propTypes = propTypes;
AppBox.defaultProps = defaultProps;

export default AppBox;
