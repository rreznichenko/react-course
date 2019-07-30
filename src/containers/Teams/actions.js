import actionTypes from './constants';

export const setTeamsAction = (teams) => ({
    type: actionTypes.SET_TEAMS,
    payload: teams,
})

export const fetchTeamsAction = () => ({
    type: actionTypes.FETCH_SAGA_TEAMS,
})

