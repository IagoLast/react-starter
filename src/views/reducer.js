import { combineReducers } from 'redux';
import counter from './counter/reducer.js';
import index from './index/reducer.js';


export default combineReducers({
  counter,
  index,
});
