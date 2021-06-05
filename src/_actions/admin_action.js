import {
    GET_FLAG,
    NAVIGATE_TO_GROUP,
    NAVIGATE_TO_PROBLEMS,
    NAVIGATE_TO_EXAMS,
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
    adminState.flag=0;
    return {
        type: NAVIGATE_TO_GROUP,
        payload: adminState
    }
}

export function toEditProblem() {
    adminState.flag=1;
    return {
        type: NAVIGATE_TO_PROBLEMS,
        payload: adminState
    }
}

export function toExamSelect() {
    adminState.flag=2;
    return {
        type: NAVIGATE_TO_EXAMS,
        payload: adminState
    }
}