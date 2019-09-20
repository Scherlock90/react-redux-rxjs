import {
    USER_COUNT_CHANGED,
    COUNTING
} from './actionTypes';

export function userCountChanged(count) {
    return { type: USER_COUNT_CHANGED, payload: count };
}

export function counter(count) {
    return { type: COUNTING, payload: count }
}
