
import { FETCH_EVENTS_BEGIN, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from './eventsActions';

const initialState = {
  list: [],
  loading: true,
  error: null,
}

const events = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        loading: false,
        error: null,
        list: action.payload,
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default events;
