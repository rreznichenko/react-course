import { put } from 'redux-saga/effects';
import { setFixturesAction,  setLoadingAction} from '../../containers/Fixtures/actions';
import FixturesService from '../../services/FixturesService';

export default function* getFixtures() {
    try {
        yield put(setLoadingAction(true));
        const FixtService = new FixturesService();
        const fixturesPromice = yield FixtService.getAllFixtures();
        yield put(setFixturesAction(fixturesPromice));
        yield put(setLoadingAction(false));
    } catch (err) {
        yield put(setLoadingAction(false));
        yield put(setFixturesAction([]))
    }
}
export function* getLiveFixtures() {
    try {
        yield put(setLoadingAction(true));
        const FixtService = new FixturesService();
        const fixturesPromice = yield FixtService.getLiveFixtures();
        yield put(setFixturesAction(fixturesPromice));
        yield put(setLoadingAction(false));
    } catch (err) {
        yield put(setLoadingAction(false));
        yield put(setFixturesAction([]))
    }
}