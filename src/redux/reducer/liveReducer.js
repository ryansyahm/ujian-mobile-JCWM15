import {FETCH_LIVE} from '../type';

const INITIAL_STATE = {
  liveList: [],
  loading: false,
  error: false,
  message: '',
};

export const liveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIVE:
      return {
        liveList: action.payload,
      };
    default:
      return state;
  }
};
