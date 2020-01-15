
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import events from '../modules/App/eventsReducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  events,
});

export default rootReducer;