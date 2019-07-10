import actionTypes from './constants';

export default function(state = {}, action) {
    switch(action.type) {
        case actionTypes.SET_FIXTURES:
            return {
                fixturesList: [...action.payload]
            }
        default:
            return state;
    }

}
