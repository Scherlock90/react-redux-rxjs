import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const observable = new BehaviorSubject(null);
const observableOnlyChanged = observable.pipe(distinctUntilChanged());

export function init() {
    console.log('service init');
    setInterval(() => {
        observable.next(Math.round(Math.random() * 200));
    }, 1000);
    setTimeout(() => {
        observable.complete();
    }, 10000)
    // socket.on('user count changed', count => observable.next(count));
}

observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});

export { observableOnlyChanged as CounterDataSources };
