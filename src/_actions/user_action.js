import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function auth(token) {
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    const request = axios.post('/api/authenticate', null, {
        headers: headers
    })
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}


export function loginUser(dataToSubmit) {
    const request = axios.post('/api/authenticate', null, {params: dataToSubmit})
        .then(response => response.data)
    return {
        type: LOGIN_USER,
        payload:request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/signup', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

