import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../reducers/rootReducer';
import { middlewares } from './../createStore';

export const testStore = (initialState) => {
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState);
}
