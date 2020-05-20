import * as actionTypes from './actionTypes.js';

export function regUser(payload) {
    return {
        type: actionTypes.REG_USER,
        payload
    };
}

export function fetchEvents(payload) {
    return {
        type: actionTypes.EVENTS_FETCH,
        payload
    };
}

export function regUserSuccess(payload) {
    return {
        type: actionTypes.REG_USER_SUCCESS,
        payload: {
            values: payload.values
        }
    };
}

export function regUserError() {
    return {type: actionTypes.REG_USER_ERROR};
}