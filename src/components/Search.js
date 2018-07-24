import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  // Callbacks to container to handle input change and button click
  handleChange(e) {
    const { handleChange } = this.props;
    handleChange(e);
  }

  handleResponse() {
    const { handleResponse, input } = this.props;
    handleResponse(input);
  }

  render() {
    const { input } = this.props;
    return (
      <div className='search'>
        <input type="text" className="input" placeholder="Search..." value={input} onChange={this.handleChange}/>
        <button className="button" onClick={this.handleResponse}>Search</button>
      </div>
    );
  }
}

Search.propTypes = {
  input: PropTypes.string,
  handleChange: PropTypes.func,
  handleResponse: PropTypes.func,
}


export default Search;
