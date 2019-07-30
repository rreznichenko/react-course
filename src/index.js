import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store/reducers';
import rootSaga from './store/sagas';
import createMiddleware from 'redux-saga';


const sagaMiddleware = createMiddleware();

const store = createStore(sagaMiddleware);


sagaMiddleware.run(rootSaga);
ReactDOM.render((
                <Provider store={store}>    
                    <Router>
                        <App />
                    </Router>
                </Provider>
                ), document.getElementById('root'));

