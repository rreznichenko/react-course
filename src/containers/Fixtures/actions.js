import actionTypes from './constants';

export const setFixturesAction = (fixtures) => {
    return {
        type: actionTypes.SET_FIXTURES,
        payload: fixtures
    };
}
export const setLoadingAction = (value) => {
    return {
        type: actionTypes.LOADING,
        payload: value
    };
}
export const fetchSagaFixturesAction = () => {
    return {
        type: actionTypes.FETCH_FIXTURES,
    };
}
export const fetchSagaFixturesLiveAction = () => {
    return {
        type: actionTypes.FETCH_LIVE_FIXTURES,
    };
}