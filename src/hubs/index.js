import * as UserCount from './user-count';
import * as SimplyCounter from './simply-counter';
import { BaseActionHandler } from './_base';

export function initHubs(store) {
    UserCount.init(store);
    // SimplyCounter.init(store);
}

export {
    BaseActionHandler,
    UserCount,
    SimplyCounter
};