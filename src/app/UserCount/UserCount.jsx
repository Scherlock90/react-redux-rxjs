import React from 'react';
import { useSelector } from 'react-redux';
import { useSimplyCounter, counter$ } from '../../hooks/simply-counter';
import '../../styles/app.scss';

function UserCount() {
    const testingCounter = useSelector(state => ({
        /**
        * @type number
        */
        userCount: state.userCount,
        /**
        * @type number
        */
        counter: state.counter
    }));

    const {
        addCounterHandler,
        deleteCounterHandler,
        value
    } = useSimplyCounter(counter$);

    return (
        <div>
            <div className="container-box">
                <div className="container-buttons">
                    <button
                        className="button-counter btn btn-lft"
                        onClick={e => addCounterHandler(e)}
                    >
                        +
                    </button>
                    <button
                        className="button-counter btn btn-rgt"
                        onClick={e => deleteCounterHandler(e)}
                    >
                        -
                    </button>
                </div>
                <div>
                    Current user's: {testingCounter.userCount}.
                </div>
                <div>
                    Date to rxjs: {value}
                </div>
                <div>
                    Date to redux from rxjs: {testingCounter.counter}
                </div>
            </div>
        </div>
    )
}

export default UserCount;