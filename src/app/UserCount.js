import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';
import { useSubscribe, counter$ } from '../hooks/simply-counter';

function UserCount() {
    const testingCounter = useSelector(state => ({
        userCount: state.userCount,
        counter: state.counter
    }));
    const counterValue = useSubscribe(counter$);

    function counterHandler() {
        const rxjsCounter = counter$.next(counterValue + 1)
    }

    return (
        <div>
            <button onClick={e => counterHandler(e)}>Clik Me!</button>
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