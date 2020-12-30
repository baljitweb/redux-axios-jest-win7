import { types } from './../../actions/types';

const PostReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_POST:
            // console.log(state);
            // console.log(action.payload);
            // const newPosts = state.concat(action.payload);
            // const newPosts = [].concat(...state, action.payload);
            // console.log(newPosts);
            // console.log([...action.payload, ...state]);
            return [...state, ...action.payload];
            // return action.payload;
        default:
            return state;
    };
};
export default PostReducer;
// export default postReducer;
