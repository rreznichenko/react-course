import actionTypes from './constants';

export const setTeamAction = (team) => {
    return {
        type: actionTypes.SET_TEAM,
        payload: team
    };
}

export const fetchTeamAction = (id) => {
    return {
        type: actionTypes.FETCH_SAGA_TEAM,
        payload: id
    };
}