import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const counter$ = new BehaviorSubject(0);
const observableOnlyChanged = counter$.pipe(distinctUntilChanged());

function useSimplyCounter(observable$) {
    const [value, update] = useState();

    useEffect(() => {
        const subscribeValue = observable$.subscribe(update)
        return () => subscribeValue.unsubscribe();
    }, [observable$]);


    function addCounterHandler() {
        const addCounter = counter$.next(value + 1)
    }

    function deleteCounterHandeler() {
        const deleteCounter = counter$.next(value - 1)
    }

    return {
        addCounterHandler,
        deleteCounterHandeler,
        value
    };
}

counter$.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});

export {
    counter$,
    useSimplyCounter,
    observableOnlyChanged as CounterDataSources
};