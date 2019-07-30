import actionTypes from './constants';

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