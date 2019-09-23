import { SimplyCounter } from '../services';
import { actions } from '../store';
import { BaseActionHandler } from './_base';

class CounterActionHandler extends BaseActionHandler {
    /**
     * @param {number} count 
     */
    onUserCountChanged(count) {
        this.store.dispatch(actions.counter(count));
    }
}

/** @type {CounterActionHandler} */
let actionHandler = null;

function createActionHandler(store) {
    actionHandler = new CounterActionHandler(store);
}

function getActionHandler() {
    return actionHandler;
}

function bindActions() {
    SimplyCounter.CounterDataSources
        .subscribe(
            count => getActionHandler().onUserCountChanged(count)
        );
}

export function init(store) {
    createActionHandler(store);
    bindActions();
}
