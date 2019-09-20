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
    console.log(store)
}

function getActionHandler() {
    return actionHandler;
}

function bindActions() {
    SimplyCounter.CounterDataSources
        .subscribe(
            count => getActionHandler().onUserCountChanged()
        );
}

export function init(store) {
    console.log('hub simply-counter init');
    createActionHandler(store);
    bindActions();
}
