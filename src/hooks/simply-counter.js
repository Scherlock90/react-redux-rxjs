import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const counter$ = new BehaviorSubject(0);
const observableOnlyChanged = counter$.pipe(distinctUntilChanged());

function useSubscribe(observable$) {
    const [value, update] = useState();

    useEffect(() => {
        const subscribeValue = observable$.subscribe(update)
        return () => subscribeValue.unsubscribe();
    }, [observable$]);

    return value;
}

counter$.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});

export {
    counter$,
    useSubscribe,
    observableOnlyChanged as CounterDataSources
};