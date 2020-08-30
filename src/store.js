import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middelware = [thunk];

const store = createStore(
    rootReducer,
    initialState,

    //make it work with devtool
    composeWithDevTools(applyMiddleware(...middelware))
);

export default store;