import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes.js';
import * as regActions from './actions.js';
import {Auth} from "../../services";
import axios from "axios";

export function fetchReg(action$) {
  return action$.ofType(actionTypes.REG_USER)
      .map(action => action.payload)
      .switchMap(payload => {
          return Observable.merge(Observable.fromPromise(
              Auth.regist(payload)
          )
              .map(res => {
                  if (!res) {
                      return regActions.regUserError()
                  }
                  console.log('res', res)
                  return regActions.regUserSuccess({
                      values: res
                  });
              })
              .catch(err => regActions.regUserError()), Observable.of(push('/events')))
      });
}

export function fetchEvents(action$) {
  return action$.ofType(actionTypes.EVENTS_FETCH)
      .switchMap(payload => {
          return Observable.fromPromise(
              axios.get(`http://localhost:8081/events`)
          )
              .map(res => {
                  if (!res) {
                      return regActions.regUserError()
                  }
                  console.log('res', res)
                  return regActions.regUserSuccess({
                      values: res.data
                  });
              })
              .catch(err => regActions.regUserError())
      });
}
