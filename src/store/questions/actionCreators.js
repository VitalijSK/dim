import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes.js';

export function fetchQuestion(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchQuestionSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchQuestions(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchQuestionsSuccess(posts, params) {
  const byId = keyBy(posts, (post) => post.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createQuestion(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createQuestionSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updateQuestion(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updateQuestionSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deleteQuestion(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deleteQuestionSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}
