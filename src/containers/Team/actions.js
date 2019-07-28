import actionTypes from './constants';
import FootballTeamsService from '../../services/FootballTeamsService';

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

export const fetchTeamByIdAction = id => {
    return dispatch => {
        const FTService = new FootballTeamsService();
        const team = FTService.getTeamById(id);
        team.then((info) => {
            dispatch(setTeamAction(info));
        })
    }
}