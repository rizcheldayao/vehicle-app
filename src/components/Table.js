import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor (props) {
    super(props);
    this.selectRow = this.selectRow.bind(this);
  }

  // Callback to container for when row is selected
  selectRow(e) {
    const { selectRow } = this.props;
    selectRow(e.target.dataset.id);
  }

  render() {
    const { vehicleData } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((vehicle, index) => {
              return (
                <tr onClick={this.selectRow} key={index}>
                  <td data-id={index}>{vehicle.year}</td>
                  <td data-id={index}>{vehicle.make}</td>
                  <td data-id={index}>{vehicle.model}</td>
                  <td data-id={index}>{vehicle.mileage}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  vehicleData: PropTypes.array.isRequired,
  selectRow: PropTypes.func,
}

export default Table;
