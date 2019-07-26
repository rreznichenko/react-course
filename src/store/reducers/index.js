import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import mainReducer from '../../containers/Main/reducer';
import teamReducer from '../../containers/Team/reducer';
import teamsReducer from '../../containers/Teams/reducer';
import fixturesReducer from '../../containers/Fixtures/reducer'

function createRootStore(middleware) {
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    main: mainReducer,
    teams: teamsReducer,
    team: teamReducer,
    fixtures: fixturesReducer
})

return createStore(rootReducer, composeEnhancers(applyMiddleware(middleware)));
}

export default createRootStore;