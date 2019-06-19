import { combineReducers } from 'redux';
import messageReducer from 'reducers/messageReducer';
import messageListReducer from 'reducers/messageListReducer';

export default combineReducers({
  message: messageReducer,
  messageList: messageListReducer
});