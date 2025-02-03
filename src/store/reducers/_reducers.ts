import { combineReducers } from '@reduxjs/toolkit';
import profileSlice from './profileSlice';

const rootReducer = combineReducers({
  profileSlice,
});

export default rootReducer;
