export const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
export const TOOGLE_ORDER = 'TOOGLE_ORDER';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';

export const fetchEventsBegin = () => ({
  type: FETCH_EVENTS_BEGIN,
  payload: {},
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: { error },
});

export const toggleEventsOrder = () => ({
  type: TOOGLE_ORDER,
});

export const addFavourite = (id) => ({
  type: ADD_FAVOURITE,
  payload: id,
});

export const deleteFavourite = (id) => ({
  type: DELETE_FAVOURITE,
  payload: id,
});
