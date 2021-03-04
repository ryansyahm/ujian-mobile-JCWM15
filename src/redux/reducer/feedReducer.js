import {FETCH_FEED} from '../type';
import {
  FETCH_FAILED,
  FETCH_START,
  FETCH_SUCCESS,
  NULLIFY_ERROR,
  UPLOAD_SUCCESS,
} from '../types';

const INITIAL_STATE = {
  feedList: [],
  loading: false,
  error: false,
  message: '',
};

export const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FEED:
      return {
        feedList: action.payload,
      };
    default:
      return state;
  }
};
