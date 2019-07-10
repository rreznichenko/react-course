import actionTypes from './constants';

export default function(state = {}, action) {
    switch(action.type) {
        case actionTypes.SET_TEAM:
            return {
                ...action.payload,
            }
        default:
            return state;
    }

}
