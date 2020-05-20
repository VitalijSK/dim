import Immutable from 'seamless-immutable';
import * as actionTypes from './actionTypes.js';

const initialState = Immutable({
  loading: false,
  values: []
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REG_USER:
    case actionTypes.EVENTS_FETCH:
      return {
        ...state,
        loading: true
      }
    case actionTypes.REG_USER_ERROR:
      return {
        ...state,
        loading: false,
        values: []
      }
    case actionTypes.REG_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        values: action.payload.values
      }
    default:
      return state;
  }
};
