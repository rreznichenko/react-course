import actionTypes from './constants'; 


export default function(state = [], action) {
    switch (action.type) {
        case actionTypes.SET_TEAMS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state;
    }
}
