import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes.js';
import * as questionsActions from './actionCreators.js';

export function fetchPost(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/questions/${id}`)
      ).map(res => questionsActions.fetchQuestionSuccess(res.data));
    });
}

export function fetchQuestions(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/questions`)
      ).map(res => questionsActions.fetchQuestionsSuccess(res.data, params));
    });
}

export function updateQuestion(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(question => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8081/questions/${question.id}`, question)
        ).map(res => questionsActions.updateQuestionSuccess(res.data)),
        Observable.of(push('/questions'))
      );
    });
}

export function createQuestion(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(question => {
      return Observable.merge(
        Observable.fromPromise(
          axios.question(`http://localhost:8081/questions`, question)
        ).map(res => questionsActions.createQuestionSuccess(res.data)),
        Observable.of(push('/questions'))
      );
    });
}

export function deleteQuestion(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(question => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8081/questions/${question.id}`)
      ).map(res => questionsActions.deleteQuestionSuccess(question));
    });
}
