// Sort array ascending or descending
export function sortArray(arr, key, order) {
  return arr.sort((a, b) => {
    if(order === 'ascending') {
      return a[key] > b[key] ? 1
      : a[key] < b[key] ? -1
      : 0;
    } else {
      return a[key] > b[key] ? -1
      : a[key] < b[key] ? 1
      : 0;
    }
  })
}

export function filter(filteredVehicles, searchStr) {
    // Filter to only return items that match year, make or model
    // eslint-disable-next-line
    filteredVehicles = filteredVehicles.filter(vehicle => {
      let match = true;
      searchStr.forEach(str => {
        // If input is string check if it's make or model
        if(match) {
          if(isNaN(str)) {
            vehicle.make.toLowerCase() === str.toLowerCase() || vehicle.model.toLowerCase() === str.toLowerCase() ? match = true : match = false;
          } else {
            // If input is number then check if it's the right year
            let vehicleYear = vehicle.year.toString();
            vehicleYear === str ? match = true : match = false;
          }
        }
      });
      if(match) {
        return vehicle;
      }
    });
    return filteredVehicles;
}

