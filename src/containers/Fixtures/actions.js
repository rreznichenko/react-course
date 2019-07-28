import actionTypes from './constants';
import FixturesService from '../../services/FixturesService';

export const setFixturesAction = (fixtures) => {
    return {
        type: actionTypes.SET_FIXTURES,
        payload: fixtures
    };
}
export const fetchSagaFixturesAction = () => {
    return {
        type: actionTypes.FETCH_FIXTURES,
    };
}

export const fetchFixturesAction = id => {
    return dispatch => {
        const FixtService = new FixturesService();
        const fixturesPromice = FixtService.getAllFixtures();
        fixturesPromice.then((fixtures) => {
            dispatch(setFixturesAction(fixtures));
        })
    }
}