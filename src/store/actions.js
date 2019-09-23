import {
    USER_COUNT_CHANGED,
    ADD_COUNT,
    DELETE_COUNT
} from './actionTypes';

export function userCountChanged(count) {
    return { type: USER_COUNT_CHANGED, payload: count };
}

export function onCountWithRxjs(count) {
    return { type: ADD_COUNT, payload: count }
}