import {
  UPDATE_CHANNEL
} from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CHANNEL:
      return {state, payload: action.payload};
    default:
      return state;
  }
}