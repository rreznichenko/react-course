import { takeEvery, call, put } from 'redux-saga/effects';
import { setTeamsAction,  } from '../../containers/Teams/actions';
import { setTeamAction,  } from '../../containers/Team/actions';
import actionTypes from '../../containers/Teams/constants';
import constants from '../../containers/Team/constants';
import FootballTeamsServise from '../../services/FootballTeamsService';

function* getTeamsWorker() {
    try {
        const FSservice = new FootballTeamsServise();
        const teams = yield FSservice.getAllTeams();
        yield put(setTeamsAction(teams));
    } catch (err) {
        yield put(setTeamsAction([]))
    }
}

function* getTeamWorker(action) {
    try {
        const FSservice = new FootballTeamsServise();
        const team = yield FSservice.getTeamById(action.payload);
        yield put(setTeamAction(team));
    } catch (err) {
        yield put(setTeamAction({}))
    }
}

export default function* watchGetTeams() {
    yield takeEvery(actionTypes.FETCH_SAGA_TEAMS, getTeamsWorker)
    yield takeEvery(constants.FETCH_SAGA_TEAM, getTeamWorker)
}