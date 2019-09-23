import {
    USER_COUNT_CHANGED,
    COUNT
} from './actionTypes';

export function userCountChanged(count) {
    return { type: USER_COUNT_CHANGED, payload: count };
}

export function onCountWithRxJS(count) {
    return { type: COUNT, payload: count }
}