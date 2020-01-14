import { fetchEventsBegin, fetchEventsSuccess, fetchEventsFailure } from '../modules/App/eventsActions';

const apiBase = 'https://my-json-server.typicode.com/OlgaPavlyuk/cakelabs';
const url = `${apiBase}/events`;
// const url = 'https://api.myjson.com/bins/o0z0a';

const fetchEvents = () => async (dispatch) => {
  console.log('fetching data');
  dispatch(fetchEventsBegin());
  const response = await fetch(url);
  if (response.ok) {
    const jsonResponse = await response.json();
    dispatch(fetchEventsSuccess(jsonResponse));
  } else {
    dispatch(fetchEventsFailure(response.status));
  }
};

export default fetchEvents;
