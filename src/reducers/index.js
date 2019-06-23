import { combineReducers } from 'redux';
import messagesReducer from 'reducers/messagesReducer';
import channelsReducer from 'reducers/channelsReducer';

export default combineReducers({
  messages: messagesReducer,
  channels: channelsReducer
});