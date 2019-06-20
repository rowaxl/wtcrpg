import { combineReducers } from 'redux';
import messagesReducer from 'reducers/messagesReducer';

export default combineReducers({
  messages: messagesReducer
});