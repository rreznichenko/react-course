import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import service from './services/FixturesService';

import mainReducer from './containers/Main/reducer';
import teamReducer from './containers/Team/reducer';
import teamsReducer from './containers/Teams/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    main: mainReducer,
    teams: teamsReducer,
    team: teamReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render((
                <Provider store={store}>    
                    <Router>
                        <App />
                    </Router>
                </Provider>
                ), document.getElementById('root'));

