import {
    USER_COUNT_CHANGED,
    COUNT
} from './actionTypes';

const initialState = {
    userCount: null,
    counter: 0
};

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case USER_COUNT_CHANGED:
            return { ...state, userCount: payload };
        case COUNT:
            return { ...state, counter: payload }
        default:
            return state;
    }
}