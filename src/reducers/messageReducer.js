import {
  UPDATE_MESSAGE,
  SEND_MESSAGE
} from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return [...state, action.payload];
    case SEND_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}