import React from 'react';
import { connect } from 'react-redux';

import EventsList from '../EventsList/EventsList';
import Error from '../../shared/components/Error';

import { toggleEventsOrder } from '../App/orderActions';
import { sortEvents, getFiltredEvents } from '../../services/selectors'

import SortIcon from '../../shared/icons/Sort';
import './events.scss';

const mapStateToProps = ({ events, order }, ownProps) => {
  // here I can use selectors if events will change often
  const filter = ownProps.match.params.filter;
  const filtred = filter ? getFiltredEvents(events.list, filter): events.list;
  const props = {
    events: filtred,
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

  const eventsSortedList = sortEvents(events, order);
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

      {!isLoading && !isError && <EventsList list={eventsSortedList} />}
    </>
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Events);