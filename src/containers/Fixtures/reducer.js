import actionTypes from './constants';

export default function(state = {}, action) {
    switch(action.type) {
        case actionTypes.SET_FIXTURES:
            return {
                ...state,
                fixturesList: [...action.payload]
            }
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state;
    }

}
