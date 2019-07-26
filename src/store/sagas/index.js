import { takeEvery, call, put } from 'redux-saga/effects';
import setTeamsAction from '../../containers/Teams/actions';
import actionTypes from '../../containers/Teams/constants';
import FootballTeamsServise from '../../services/FootballTeamsService';

function* getTeamsWorker() {
    try {
        const FSservice = new FootballTeamsServise();
        const teams = yield call(FSservice.getAllTeams);
        yield put(setTeamsAction(teams));
    } catch (err) {
        yield put(setTeamsAction([]))
    }
}

export function* watchGetTeams() {
    yield takeEvery()
}