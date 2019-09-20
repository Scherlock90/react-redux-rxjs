import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import { initHubs } from './hubs';
import { initServices } from './services';
import { getReduxStore } from './store';

initHubs(getReduxStore());
initServices();

ReactDOM.render(
    (
        <Provider store={getReduxStore()}>
            <App />
        </Provider>
    ), document.getElementById('root')
);
