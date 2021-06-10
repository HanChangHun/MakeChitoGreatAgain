import {
    GET_FLAG,
    NAVIGATE_TO_GROUP,
    NAVIGATE_TO_PROBLEMS,
    NAVIGATE_TO_EXAMS,
} from './types';
import problems from "./problems.json"
import exam_info from "./exam_info.json"

let flag = 0
let problemList = problems
let examInfo = exam_info

export function getProblems(gid) {
    for (let i = 0; i < problemList.length; i++) {
        if (problemList[i].gid === gid) {
            return problemList[i].problems
        }
    }
    return []
}

export function getAllGroupInfo() {
    let allGroupInfo = []
    for (let i = 0; i < problemList.length; i++) {
        allGroupInfo.push({
            "gid": problemList[i].gid,
            "g_name": problemList[i].g_name,
            "num_problems": problemList[i].problems.length,
        })
    }
    return allGroupInfo
}

export function getAllExamInfo() {
    return examInfo
}

export function getFlag() {
    return {
        type: GET_FLAG,
        payload: flag
    }
}

export function toGroupSelect() {
    flag = 0;
    return {
        type: NAVIGATE_TO_GROUP,
        payload: flag
    }
}

export function toEditProblem() {
    flag = 1;
    return {
        type: NAVIGATE_TO_PROBLEMS,
        payload: flag
    }
}

export function toExamSelect() {
    flag = 2;
    return {
        type: NAVIGATE_TO_EXAMS,
        payload: flag
    }
}