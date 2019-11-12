import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import artists from './artists_errors_reducer';

export default combineReducers({
  session,
  artists,
});
