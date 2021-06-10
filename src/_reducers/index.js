import { combineReducers } from 'redux';
import user from './user_reducer';
import admin from './admin_reducer';
import ability from './ability_reducer';

const rootReducer = combineReducers({
    user, admin, ability
})

export default rootReducer;