import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import appAllReducers from './reducers/rootReducer';

export const middlewares = [ReduxThunk];
export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(appAllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

