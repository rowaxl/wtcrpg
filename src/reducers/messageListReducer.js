import {
  FETCH_MESSAGES
} from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      const messages = action.payload.map(message => message.id);
      return [...state, ...messages];
    default:
      return state;
  }
}