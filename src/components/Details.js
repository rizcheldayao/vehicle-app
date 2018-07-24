import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  constructor (props) {
    super(props);
    this.clickBack = this.clickBack.bind(this);
  }

  // Callbacks to container to return to table
  clickBack() {
    const { clickBack } = this.props;
    clickBack();
  }

  render() {
    const { vehicle } = this.props;
    return (
      <div className='details'>
      <button onClick={this.clickBack}>Back</button>
      <div className='details-info'>
        <img src={vehicle.image_url} alt={vehicle.model}/>
        <p>{`Year: ${vehicle.year}`}</p>
        <p>{`Make: ${vehicle.make}`}</p>
        <p>{`Model: ${vehicle.model}`}</p>
        <p>{`Mileage: ${vehicle.mileage}`}</p>
      </div>
      </div>
    );
  }
}

Details.propTypes = {
  vehicle: PropTypes.object.isRequired,
  clickBack: PropTypes.func,
}

export default Details;
