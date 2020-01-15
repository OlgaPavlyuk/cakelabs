
import {
  FETCH_EVENTS_BEGIN,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  TOOGLE_ORDER,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
} from './eventsActions';

const initialState = {
  list: [],
  loading: true,
  error: null,
  order: 'asc',
  favourites: [],
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
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
    case TOOGLE_ORDER:
      return {
        ...state,
        order: state.order === 'asc' ? 'desc' : 'asc',
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload ],
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload ),
      };
    default:
      return state;
  }
};

export default events;
