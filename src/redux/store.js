import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { basename } from './routes'; 

export const history = createBrowserHistory({basename});

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), 
        thunk,
      ),
    ),
  )

  return store;
};
