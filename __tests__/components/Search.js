import React from 'react';
import { mount } from 'enzyme';
import Search from '../../src/components/Search';

describe('<Search />', () => {
  it('Basic render with of search', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  })
})
