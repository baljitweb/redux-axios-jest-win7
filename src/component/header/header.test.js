import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    console.log(component.debug());
    return component;
}

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {
        //    const component = shallow(<Header />);
        // component = setUp();
        const wrapper = component.find('.header-component');
        expect(wrapper.length).toBe(1);
    });
    it('should render logo', () => {
        // component = setUp();
        const wrapper = component.find('.logo');
        expect(wrapper.length).toBe(1);
    });
});
