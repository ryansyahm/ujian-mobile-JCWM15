import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import {feedReducer} from './feedReducer';
import {liveReducer} from './liveReducer';

export default combineReducers({
  auth: authReducer,
  feed: feedReducer,
  live: liveReducer,
});
