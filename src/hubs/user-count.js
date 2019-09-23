import { UserCount } from '../services';
import { actions } from '../store';
import { BaseActionHandler } from './_base';

class UserCountActionHandler extends BaseActionHandler {
    /**
     * @param {number} count 
     */
    onUserCountChanged(count) {
        this.store.dispatch(actions.userCountChanged(count));
    }
}

/** @type {UserCountActionHandler} */
let actionHandler = null;

function createActionHandler(store) {
    actionHandler = new UserCountActionHandler(store);
}

function getActionHandler() {
    return actionHandler;
}

function bindActions() {
    UserCount.UserCountDataSource.subscribe(
        count => getActionHandler().onUserCountChanged(count)
    );
}

export function init(store) {
    createActionHandler(store);
    bindActions();
}
