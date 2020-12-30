import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

const setUp = (props = {}) => {
    const component = shallow(<Button {...props} />);
    return component;
}


describe('button render test', () => {
    let component,
        mockFn;
    beforeEach(() => {
        mockFn = jest.fn();
        const props = {
            text: 'fetch',
            emitEvent: mockFn
        };
        component = setUp(props);
    });

    it('should be there', () => {
        const btn = component.find('.btn');
        expect(btn.length).toBe(1);
    });

    //mocking button click function
    it('should emit call back on click event', () => {
        const btn = component.find('.btn');
        btn.simulate('click');
        const callback = mockFn.mock.calls.length;
        expect(callback).toBe(1);
    });
});