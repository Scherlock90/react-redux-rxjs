import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';
import { useSubscribe, counter$ } from '../services/simply-counter';

function UserCount() {
    const dispatch = useDispatch();
    const testingCounter = useSelector(state => ({
        userCount: state.userCount,
        counter: state.counter
    }));
    const counterValue = useSubscribe(counter$);

    function counterHandler() {
        // dispatch(actions.counter())
        const rxjsCounter = counter$.next(counterValue + 1)
    }

    return (
        <div>
            <button onClick={e => counterHandler(e)}>Kliknij mnie!</button>
            <div>
                Obecnie mamy tylu uzytkownikow: {testingCounter.userCount}.
            </div>
            <div>
                Dane z rxjs: {counterValue}
            </div>
            <div>
                Dane z redux: {testingCounter.counter}
            </div>
        </div>
    )
}

export default UserCount;