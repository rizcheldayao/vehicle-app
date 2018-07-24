import React from 'react';
import { mount } from 'enzyme';
import Table from '../../src/components/Table';

const vehicleData = [
  {
    year: 1999,
    make: 'Kia',
    model: 'Optima',
    mileage: 24235,
    image_url: 'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg'
  },
  {
    year: 1999,
    make: 'Kia',
    model: 'Optima',
    mileage: 24235,
    image_url: 'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg'
  },
  {
    year: 1999,
    make: 'Kia',
    model: 'Optima',
    mileage: 24235,
    image_url: 'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg'
  }
]

describe('<Table />', () => {
  it('Basic render with the table', () => {
    const wrapper = mount(<Table vehicleData={vehicleData} />);
    expect(wrapper.find('table').length).toEqual(1);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tr').length).toEqual(4);
    expect(wrapper.find('tbody').length).toEqual(1);
  })
})
