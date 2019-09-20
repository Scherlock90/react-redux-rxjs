import {
    USER_COUNT_CHANGED,
    COUNTING
} from './actionTypes';

const initialState = {
    userCount: null,
    counter: 0
};

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case USER_COUNT_CHANGED:
            return { ...state, userCount: payload };
        case COUNTING:
            return { ...state, counter: state.counter + 1 }
        default:
            return state;
    }
}