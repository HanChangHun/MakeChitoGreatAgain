import {
    STUDY_ABILITY,
    WORKOUT_ABILITY,
    SPEECH_ABILITY
} from './types';
import axios from "axios";

export function studyAbility(dataToSubmit) {
    const request = axios.post('/api/activity/study',
        null, {params: dataToSubmit})
        .then(response => response.data)
    return {
        type: STUDY_ABILITY,
        payload: request
    }
}

export function workoutAbility(dataToSubmit) {
    const request = axios.post('/api/activity/workout',
        null, {params: dataToSubmit})
        .then(response => response.data)
    return {
        type: WORKOUT_ABILITY,
        payload: request
    }
}

export function speechAbility(dataToSubmit) {
    const request = axios.post('/api/activity/interview',
        null, {params: dataToSubmit})
        .then(response => response.data)
    return {
        type: SPEECH_ABILITY,
        payload: request
    }
}