import axios from 'axios';
import {
    GET_FLAG,
    NAVIGATE_TO_GROUP
} from './types';

const adminState = {
    flag: 0,
    groups: [],
    examInfo: []
}

export function getFlag() {
    return {
        type: GET_FLAG,
        payload: adminState.flag
    }
}

export function toGroupSelect() {
    adminState.flag=1;
    return {
        type: NAVIGATE_TO_GROUP,
        payload: adminState
    }
}

export function toExamSelect() {
    adminState.flag=2;
    return {
        type: NAVIGATE_TO_GROUP,
        payload: adminState
    }
}