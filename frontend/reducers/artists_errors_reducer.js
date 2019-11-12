import {
  RECEIVE_ARTISTS_ERRORS
} from '../actions/artist_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTISTS_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
