import {
    GET_FLAG,
    NAVIGATE_TO_GROUP
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_FLAG:
            return { ...state, flag: action.payload }
            break;
        case NAVIGATE_TO_GROUP:
            return { ...state, navigation: action.payload }
            break;
        default:
            return state;
    }
}