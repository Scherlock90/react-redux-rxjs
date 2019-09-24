import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import * as actions from './actions';

const epicMiddleware = createEpicMiddleware();
let store = null;

function _createStore() {
    return createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );
}

export function getReduxStore() {
    return store || (store = _createStore());
}

export {
    actions
};