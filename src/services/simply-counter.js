import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// const observableOnlyChanged = observable.pipe(distinctUntilChanged());

const counter$ = new BehaviorSubject(0);

function useSubscribe(observable$) {
    const [value, update] = useState();

    useEffect(() => {
        const subscribeValue = observable$.subscribe(update)
        return () => subscribeValue.unsubscribe();
    }, [observable$]);

    return value;
}

export {
    counter$,
    useSubscribe as CounterDataSources
};