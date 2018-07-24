import React, { Component } from 'react';
import Table from '../components/Table';
import Sort from '../components/Sort';
import Search from '../components/Search';
import Details from '../components/Details';
import { sortArray, filter } from '../utils';

class List extends Component {
  // Setting initial state and binding functions
  constructor() {
    super();
    this.state = {
      vehicles: [],
      filtered: [],
      details: false,
      vehicleIndex: null,
      input: '',
      error: ''
    };
    this.sortTable = this.sortTable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRow = this.selectRow.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.clickBack = this.clickBack.bind(this)
  }

  // Fetching data from json endpoint and setting state to vehicles
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
      .then(output => {
        return output.json();
      }).then(data => {
        this.setState({
          vehicles: data
        });
      }).catch(function(error) {
        this.setState({
          error: error
        })
      });
  }

  // Function if row is selected to show details page
  selectRow(index) {
    this.setState({
      details: true,
      vehicleIndex: index
    });
  }

  clickBack() {
    this.setState({
      details: false,
      vehicleIndex: null
    });
  }

  // Set input when user changes search field
  handleChange(e) {
    this.setState({ input: e.target.value });
  }


  // Filter array based on year, make or model
  handleResponse() {
    const { input, vehicles, error } = this.state;
    // Remove all spaces from input
    let searchStr = input.trim().split(" ");
    let filteredVehicles = vehicles;
    // Call filter function to filter out vehicles
    filteredVehicles = filter(filteredVehicles, searchStr);
    // Show message if no vehicles match input
    if(filteredVehicles.length === 0 && input !==  '') {
      this.setState({
        error: 'No vehicles match that search'
      })
    } else {
      error.length > 0 ? this.setState({ error: '' }) : {};
      // Set state to new filtered array
      this.setState({
        filtered: filteredVehicles
      });
    }
  }

  // Set vehicle state to new sorted vehicles
  sortTable(text) {
    const { vehicles, filtered } = this.state;
    let sortedVehicles = filtered.length > 0 ? filtered : vehicles;
    let vehiclesToSort = filtered.length > 0 ? filtered : vehicles;
    text === 'By Year' ? sortedVehicles = sortArray(vehiclesToSort, 'year', 'ascending')
    : text === 'By Mileage' ? sortedVehicles = sortArray(vehiclesToSort, 'mileage', 'descending')
    : sortedVehicles = sortArray(vehiclesToSort, 'created_at', 'descending');
    this.setState({
      vehicles: sortedVehicles
    });
  }

  // Show details if details state is true else show table
  render() {
    const { vehicles, details, vehicleIndex, filtered, input, error } = this.state;
    return (
      <div>
        {details ? <Details vehicle={filtered.length > 0 ? filtered[vehicleIndex] :  vehicles[vehicleIndex]} clickBack={this.clickBack}/> :
        <div>
          <section className='list-header'>
            <Search handleChange={this.handleChange} input={input} handleResponse={this.handleResponse} />
            <Sort sortTable={this.sortTable}/>
          </section>
          {error.length > 0 && <p className='error'>{error}</p>}
          <Table vehicleData={filtered.length > 0 ? filtered : vehicles} selectRow={this.selectRow}/>
        </div>
      }
      </div>
    );
  }
}

export default List;
