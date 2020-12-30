import { types } from './../../actions/types';
import postReducer from './postReducer';

describe('testing post reducer', () => {
    it('should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should new state if receiving type', () => {
        const posts = [{title:'test1'},{title:'test2'},{title:'test3'}];
        const newState = postReducer(undefined, {
            type : types.GET_POST,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
})