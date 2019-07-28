import { takeEvery, call, put } from 'redux-saga/effects';
import { setTeamsAction } from '../../containers/Teams/actions';
import actionTypes from '../../containers/Teams/constants';
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

export default function* watchGetTeams() {
    yield takeEvery(actionTypes.FETCH_SAGA_TEAMS, getTeamsWorker)
}