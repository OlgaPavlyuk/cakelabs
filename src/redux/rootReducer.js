
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import events from '../modules/App/eventsReducers';
import order from '../modules/App/orderReducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  events,
  order,
});

export default rootReducer;