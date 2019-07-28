import { takeEvery, call, put } from 'redux-saga/effects';
import { setTeamsAction,  } from '../../containers/Teams/actions';
import { setTeamAction,  } from '../../containers/Team/actions';
import { setFixturesAction,  } from '../../containers/Fixtures/actions';
import actionTypes from '../../containers/Teams/constants';
import constants from '../../containers/Team/constants';
import constantsF from '../../containers/Fixtures/constants';
import FootballTeamsServise from '../../services/FootballTeamsService';
import FixturesService from '../../services/FixturesService';

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

function* getFixtures() {
    try {
        const FixtService = new FixturesService();
        const fixturesPromice = yield FixtService.getAllFixtures();
        yield put(setFixturesAction(fixturesPromice));
    } catch (err) {
        yield put(setFixturesAction([]))
    }
}

export default function* watchGetTeams() {
    yield takeEvery(actionTypes.FETCH_SAGA_TEAMS, getTeamsWorker)
    yield takeEvery(constants.FETCH_SAGA_TEAM, getTeamWorker)
    yield takeEvery(constantsF.FETCH_FIXTURES, getFixtures)
}