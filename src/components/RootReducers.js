import {combineReducers} from 'redux';
import UserReducer from './UserReducer.js';

const rootreducer = combineReducers({
  UserReducer:UserReducer
});
export default rootreducer;
