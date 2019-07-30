import { put } from 'redux-saga/effects';
import { setFixturesAction,  } from '../../containers/Fixtures/actions';
import FixturesService from '../../services/FixturesService';

export default function* getFixtures() {
    try {
        const FixtService = new FixturesService();
        const fixturesPromice = yield FixtService.getAllFixtures();
        yield put(setFixturesAction(fixturesPromice));
    } catch (err) {
        yield put(setFixturesAction([]))
    }
}