import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { val: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { onChange } = this.props;
    this.setState({ val: e.target.value });
    onChange(e.target.value);
  }

  render() {
    const { val } = this.state;
    return (
      <div className="search-bar">
        <div className="search-bar-inner">
          <input
            placeholder="🔍搜尋"
            value={val}
            onChange={this.handleOnChange}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;
