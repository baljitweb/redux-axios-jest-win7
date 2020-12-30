import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import { testStore } from './shared';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const component = shallow(<App store={store} />).childAt(0).dive();
    // console.log(component.debug());
    return component;
}

describe('test App component', () => {
    let component;
    beforeEach(() => {
        const initialState = {
            posts: [
                { title: 'title test 1', body: 'body test 1' },
                { title: 'title test 2', body: 'body test 2' },
                { title: 'title test 3', body: 'body test 3' }
            ]
        }
        component = setUp(initialState);
    });

    it('should render without errors', () => {
        // const component = setUp();
        expect(component.length).toBe(1);
    });

    it('should render app instance and updateState()', () => {
        const compInstance = component.instance();
        compInstance.updateState();
        const newState = compInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('should render app instance and fetch()', () => {
        const compInstance = component.instance();
        compInstance.fetch();
        const newState = compInstance.state.hideBtn;
        expect(newState).toBe(true);
    });
});
