import moxios from 'moxios';
import { testStore } from './index';
import { fetchPosts } from './../../src/actions/axiosAction';

describe('fetchPost Testing', () => {
    beforeEach(() => {
        moxios.install();
    })
    afterEach(() => {
        moxios.uninstall();
    })

    it('test it update store correctly', () => {
        const exptectedupdatedStore = [
            {
                title: 'title 1',
                body: 'body 1'
            },
            {
                title: 'title 2',
                body: 'body 2'
            },
            {
                title: 'title 3',
                body: 'body 3'
            }
        ];
        const store = testStore();

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: exptectedupdatedStore
            })
        });
        return store.dispatch(fetchPosts())
            .then((res) => {
                const newState = store.getState();
                expect(newState.postsList).toEqual(exptectedupdatedStore);
            })
    });
});