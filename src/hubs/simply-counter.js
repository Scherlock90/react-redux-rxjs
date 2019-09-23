import { SimplyCounter } from '../hooks';
import { actions } from '../store';
import { BaseActionHandler } from './_base';

class CounterActionHandler extends BaseActionHandler {
    /**
     * @param {number} count 
     */
    onCount(count) {
        this.store.dispatch(actions.addCount(count));
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
            count => {
                getActionHandler().onCount(count);
            }
        );
}

export function init(store) {
    createActionHandler(store);
    bindActions();
}
