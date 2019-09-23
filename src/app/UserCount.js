import React from 'react';
import { useSelector } from 'react-redux';
import { useSimplyCounter, counter$ } from '../hooks/simply-counter';

function UserCount() {
    const testingCounter = useSelector(state => ({
        userCount: state.userCount,
        counter: state.counter
    }));

    const {
        addCounterHandler,
        deleteCounterHandler,
        value
    } = useSimplyCounter(counter$);

    return (
        <div>
            <button onClick={e => addCounterHandler(e)}>+</button>
            <button onClick={e => deleteCounterHandler(e)}>-</button>
            <div>
                Currnet user's: {testingCounter.userCount}.
            </div>
            <div>
                Date to rxjs: {value}
            </div>
            <div>
                DAte to redux-rxjs: {testingCounter.counter}
            </div>
        </div>
    )
}

export default UserCount;