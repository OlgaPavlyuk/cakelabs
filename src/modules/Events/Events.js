import React from 'react';
import { connect } from 'react-redux';

import EventsList from '../EventsList/EventsList';
import Error from '../../shared/components/Error';

import { toggleEventsOrder } from '../App/orderActions';
import { sortEvents } from '../../services/selectors'

import SortIcon from '../../shared/icons/Sort';
import './events.scss';

const mapStateToProps = ({ events, order }) => {
  // here I can use selectors if events will change often
  const eventsSortedList = sortEvents(events.list, order.order);
  const props = {
    events: eventsSortedList,
    isLoading: events.loading,
    isError: events.error,
    order: order.order,
  };
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  toggleEventsOrder: () => dispatch(toggleEventsOrder()),
});

const Events = (props) => {
  const { events, isLoading, isError, order, toggleEventsOrder } = props;
  const btnTitle = order === 'asc' ? 'По возрастанию' : 'По убыванию';
  return (
    <>
      <div className='home__header'>
        <h1>События в городе</h1>
        <button
          onClick={() => toggleEventsOrder()}
          className={`order-toggler ${order}`}
        >
          {btnTitle}
          <SortIcon width='1.5rem' height='1.5rem' />
        </button>
      </div>
      { isLoading && <div>Loading</div> }
      {isError && <Error error={isError} />}
      {!isLoading && !isError && <EventsList list={events} />}
    </>
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Events);