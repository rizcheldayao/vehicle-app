import React from 'react';
import { mount } from 'enzyme';
import Sort from '../../src/components/Sort';

describe('<Sort />', () => {
  it('Basic render with the sorting menu', () => {
    const wrapper = mount(<Sort />);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('.sort-menu').length).toEqual(1);
    expect(wrapper.find('.sort-item').length).toEqual(3);
  })
})
