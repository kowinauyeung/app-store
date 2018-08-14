import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import StarImg from './images/star.png';

const propTypes = {
  value: PropTypes.number.isRequired,
};

function Rating(props) {
  const { value } = props;
  return (
    <div className="rating">
      <div className="rating-wrap">
        <div
          className="rating-bar"
          style={{
            width: `${(value / 5) * 100}%`,
          }}
        />
        <img className="rating-star" src={StarImg} alt="" />
        <img className="rating-star" src={StarImg} alt="" />
        <img className="rating-star" src={StarImg} alt="" />
        <img className="rating-star" src={StarImg} alt="" />
        <img className="rating-star" src={StarImg} alt="" />
      </div>
    </div>
  );
}

Rating.propTypes = propTypes;

export default Rating;
