import React from 'react';
import { shallow } from 'enzyme';
import ListItems from './listitem';

const setUp = (props = {}) => {
    const component = shallow(<ListItems {...props} />);
    return component;
}


describe('Listitems component with props', () => {
    let component;
    beforeEach(() => {
        const props = {
            title: 'title text',
            desc: 'some desc text'
        };
        component = setUp(props);
    });

    it('render properly ', () => {
        const wrap = component.find('.ListItem');
        expect(wrap.length).toBe(1);
    });

    it('render title', () => {
        const title = component.find('.title');
        expect(title.length).toBe(1);
    });
    it('render desc', () => {
        const desc = component.find('.desc');
        expect(desc.length).toBe(1);
    });
});

describe('Listitems component without props', () => {
    let component;
    beforeEach(() => {
        const props = {
            desc: 'some desc text'
        };
        component = setUp(props);
    });

    it('render properly ', () => {
        const wrap = component.find('.ListItem');
        expect(wrap.length).toBe(0);
    });

    it('render title', () => {
        const title = component.find('.title');
        expect(title.length).toBe(0);
    });
    it('render desc', () => {
        const desc = component.find('.desc');
        expect(desc.length).toBe(0);
    });
});