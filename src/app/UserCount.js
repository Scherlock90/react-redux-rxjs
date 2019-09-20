import React, { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';

const counter$ = new BehaviorSubject(0);

function useSubscribe(observable$) {
    const [value, update] = useState();

    useEffect(() => {
        const subscribeValue = observable$.subscribe(update)
        return () => subscribeValue.unsubscribe();
    }, [observable$]);

    return value;
}


function UserCount() {
    const dispatch = useDispatch();
    const testingCounter = useSelector(state => ({
        userCount: state.userCount,
        counter: state.counter
    }));
    const counterValue = useSubscribe(counter$);

    function counterHandler() {
        dispatch(actions.counter())
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