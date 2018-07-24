import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sort extends Component {
  constructor (props) {
    super(props);
    this.sortTable = this.sortTable.bind(this)
  }

  // Callback to container function to sort table
  sortTable(e) {
    const { sortTable } = this.props;
    const text = e.target.textContent;
    sortTable(text);
  }

  render() {
    return (
      <div className='sort'>
        <div className='sort-dropdown'>
          <button className='sort-button' type='button' aria-haspopup='true' aria-expanded='false'>
            Sort
          </button>
          <div className='sort-menu' aria-labelledby='dropdownMenuButton'>
            <p className='sort-item' onClick={this.sortTable}>By Year</p>
            <p className='sort-item' onClick={this.sortTable}>By Mileage</p>
            <p className='sort-item' onClick={this.sortTable}>By Listing Date</p>
          </div>
        </div>
      </div>
    );
  }
}

Sort.propTypes = {
  sortTable: PropTypes.func,
}

export default Sort;
