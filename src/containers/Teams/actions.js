import actionTypes from './constants';
import FootballTeamsService from '../../services/FootballTeamsService';

export const setTeamsAction = (teams) => ({
    type: actionTypes.SET_TEAMS,
    payload: teams,
})

export const getTeamsAction = () => {
    return dispatch => {
        const FTService = new FootballTeamsService();
        const teams = FTService.getAllTeams();
        teams.then(data =>  dispatch(setTeamsAction(data)));
    }
}

