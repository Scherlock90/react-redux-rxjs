import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import * as actions from './actions';

let store = null;

function _createStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

export function getReduxStore() {
    return store || (store = _createStore());
}

export {
    actions
};