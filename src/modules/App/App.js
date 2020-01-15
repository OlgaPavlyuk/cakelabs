import React, { useEffect }  from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Events from '../Events/Events';
import Event from '../Event/Event';

import fetchEvents from '../../services/fetchEvents';

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

const App = (props) => {
  useEffect(() => {
    props.fetchEvents();
  });

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Events} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/:filter" component={Events} />
            <Route exact path="/events/:event" component={Event} />
            {/* <Route component={<div>404</div>} /> */}
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
