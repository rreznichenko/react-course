import { takeEvery } from 'redux-saga/effects';

import teamsActionTypes from '../../containers/Teams/constants';
import teamActionTypes from '../../containers/Team/constants';
import fixturesActionTypes from '../../containers/Fixtures/constants';

import getTeamsWorker from '../../containers/Teams/saga';
import getTeamWorker from '../../containers/Team/saga';
import getFixtures, { getLiveFixtures } from '../../containers/Fixtures/saga';

export default function* watchGetTeams() {
    yield takeEvery(teamsActionTypes.FETCH_SAGA_TEAMS, getTeamsWorker)
    yield takeEvery(teamActionTypes.FETCH_SAGA_TEAM, getTeamWorker)
    yield takeEvery(fixturesActionTypes.FETCH_FIXTURES, getFixtures)
    yield takeEvery(fixturesActionTypes.FETCH_LIVE_FIXTURES, getLiveFixtures)
}