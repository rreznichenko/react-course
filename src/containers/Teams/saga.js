import { put } from 'redux-saga/effects';
import { setTeamsAction } from '../../containers/Teams/actions';
import FootballTeamsServise from '../../services/FootballTeamsService';

export default function* getTeamsWorker() {
    try {
        const FSservice = new FootballTeamsServise();
        const teams = yield FSservice.getAllTeams();
        yield put(setTeamsAction(teams));
    } catch (err) {
        yield put(setTeamsAction([]))
    }
}