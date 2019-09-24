import React from 'react';
import { useSelector } from 'react-redux';
import { useSimplyCounter, counter$ } from '../hooks/simply-counter';
import '../styles/app.scss';

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
        <div className="container-box">
            <div className="container-buttons">
                <button className="button-counter btn-lft" onClick={e => addCounterHandler(e)}>+</button>
                <button className="button-counter btn-rgt" onClick={e => deleteCounterHandler(e)}>-</button>
            </div>
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