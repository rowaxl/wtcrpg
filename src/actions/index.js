import { UPDATE_MESSAGE, SEND_MESSAGE, FETCH_MESSAGES } from 'actions/type';
// import axios from 'axios';

export const updateMessage = message => {
  return { type: UPDATE_MESSAGE, payload: message };
}

export const sendMessage = async () => {
  // const response = await axios.post();

  const action = {
    type: SEND_MESSAGE,
    payload: ''
  };

  return action;
}

export const fetchMessage = async () => {
  // const response = await axios.get();

  const action = {
    type: FETCH_MESSAGES,
    // payload: response.data
    payload: []
  };

  return action;
}