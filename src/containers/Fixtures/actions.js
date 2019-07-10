import actionTypes from './constants';
import FootballTeamsService from '../../services/FootballTeamsService';

const setTeamAction = (team) => {
    return {
        type: actionTypes.SET_TEAM,
        payload: team
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