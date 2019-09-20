import * as UserCount from './user-count';
import * as SimplyCounter from './simply-counter';

export function initServices() {
    UserCount.init();
    SimplyCounter.init();
}

export {
    UserCount,
    SimplyCounter
};