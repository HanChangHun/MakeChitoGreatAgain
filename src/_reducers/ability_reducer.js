import {
    STUDY_ABILITY,
    WORKOUT_ABILITY,
    SPEECH_ABILITY
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case STUDY_ABILITY:
            return {...state, status: action.payload}
            break;
        case WORKOUT_ABILITY:
            return {...state, status: action.payload}
            break;
        case SPEECH_ABILITY:
            return {...state, status: action.payload}
            break;
        default:
            return state;
    }
}