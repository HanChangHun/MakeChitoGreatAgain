import {
    STUDY_ABILITY,
    WORKOUT_ABILITY,
    SPEECH_ABILITY,
    END_MIDTERM, END_FINAL
} from './types';
import axios from "axios";

export function studyAbility(token) {
    const request = axios.post('/api/activity/study',
        null, {headers: {Authorization: "Bearer " + token}})
        .then(response => response.data)
    return {
        type: STUDY_ABILITY,
        payload: request
    }
}

export function workoutAbility(token) {
    const request = axios.post('/api/activity/workout',
        null, {headers: {Authorization: "Bearer " + token}})
        .then(response => response.data)
    return {
        type: WORKOUT_ABILITY,
        payload: request
    }
}

export function speechAbility(token) {
    const request = axios.post('/api/activity/interview',
        null, {headers: {Authorization: "Bearer " + token}})
        .then(response => response.data)
    return {
        type: SPEECH_ABILITY,
        payload: request
    }
}

export function midtermEnd(token, num) {
    const request = axios.post('/api/user/hint',
        null, {headers: {Authorization: "Bearer " + token}})
        .then(response => response.data)
    return {
        type: END_MIDTERM,
        payload: request
    }
}

export function finalEnd(token, grade) {
    const request = axios.post('/api/user/hint',
        null, {headers: {Authorization: "Bearer " + token}})
        .then(response => response.data)
    return {
        type: END_FINAL,
        payload: request
    }
}