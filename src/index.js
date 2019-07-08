import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import mainReducer from './containers/Main/reducer';
import teamReducer from './containers/Team/reducer';
import teamsReducer from './containers/Teams/reducer';

const rootReducer = combineReducers({
    main: mainReducer,
    teams: teamsReducer,
    team: teamReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
                <Provider store={store}>    
                    <Router>
                        <App />
                    </Router>
                </Provider>
                ), document.getElementById('root'));

