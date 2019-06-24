import { combineReducers } from 'redux';
import messagesReducer from 'reducers/messagesReducer';
import channelsReducer from 'reducers/channelsReducer';
import userReducer from 'reducers/userReducer';

export default combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  user: userReducer
});