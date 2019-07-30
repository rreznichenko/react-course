import { put } from 'redux-saga/effects';
import { setTeamAction } from '../../containers/Team/actions';
import FootballTeamsServise from '../../services/FootballTeamsService';


export default function* getTeamWorker(action) {
    try {
        const FSservice = new FootballTeamsServise();
        const team = yield FSservice.getTeamById(action.payload);
        yield put(setTeamAction(team));
    } catch (err) {
        yield put(setTeamAction({}))
    }
}