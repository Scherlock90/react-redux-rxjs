import React from 'react';
import { useSelector } from 'react-redux';
import { useSubscribe, counter$ } from '../hooks/simply-counter';

function UserCount() {
    const testingCounter = useSelector(state => ({
        userCount: state.userCount,
        counter: state.counter
    }));

    const counterValue = useSubscribe(counter$);

    function addCounterHandler() {
        const addCounter = counter$.next(counterValue + 1)
    }

    function deleteCounterHandeler() {
        const deleteCounter = counter$.next(counterValue - 1)
    }

    return (
        <div>
            <button onClick={e => addCounterHandler(e)}>+</button>
            <button onClick={e => deleteCounterHandeler(e)}>-</button>
            <div>
                Currnet user's: {testingCounter.userCount}.
            </div>
            <div>
                Date to rxjs: {counterValue}
            </div>
            <div>
                DAte to redux-rxjs: {testingCounter.counter}
            </div>
        </div>
    )
}

export default UserCount;