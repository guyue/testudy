import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
} from 'redux';
import {
    Provider,
} from 'react-redux';

import Lottery from '../../../common/container/lottery.jsx';
import reducers from '../../../common/reducers';
import storage from './storage.js';

function initUsers() {
    return window.users.map((user) => {
        return [storage.get(user), user].reduce(Object.assign, {});
    });
}

const store = createStore(reducers, {
    users: initUsers(),
    prizes: window.prizes,
});

ReactDOM.render(<Provider store={store}>
    <Lottery />
</Provider>, document.querySelector('#app'));
