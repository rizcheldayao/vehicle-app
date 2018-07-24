import React from 'react';
import { mount, shallow } from 'enzyme';
import Details from '../../src/components/Details';

// Sorry I didn't have enough time to do more in depth testing like testing functions, events, etc :/

const vehicle = {
  year: 1999,
  make: 'Kia',
  model: 'Optima',
  mileage: 24235,
  image_url: 'http://www.optimaforums.com/forum/attachments/new-member-introductions/11137d1347548855-new-2013-kia-optima-sx-l-titanium-photo.jpg'
}

describe('<Details />', () => {
  it('Basic render with of vehicle details', () => {
    const wrapper = mount(<Details vehicle={vehicle}/>);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(4);
    expect(wrapper.prop('vehicle')).toEqual(vehicle);
  })
})
