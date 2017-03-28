import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import User from './component/User';
import Meal from './component/Meal';

import './index.css';

const routes = {
    path: '/',
    indexRoute: { onEnter: (nextState, replace) => replace('/') },
    childRoutes: [
        {
            path: 'users',
            component: User,
        },
        {
            path: 'meals',
            component: Meal,
        },
    ]
};

ReactDOM.render(
  <App  routes={routes} />,
  document.getElementById('root')
);
