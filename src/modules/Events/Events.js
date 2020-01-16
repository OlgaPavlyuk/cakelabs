import React from 'react';
import { connect } from 'react-redux';

import EventsList from '../EventsList/EventsList';
import Error from '../../shared/components/Error';
import Loader from '../../shared/components/Loader';

import { toggleEventsOrder } from '../App/eventsActions';
import { sortEvents, getFiltredEvents, getFavouritesEvents } from '../../services/selectors';
import routes from '../../redux/routes';

import SortIcon from '../../shared/icons/Sort';
import './events.scss';

const mapStateToProps = ({ events }, ownProps) => {
  // here I can use selectors if events will change often
  const filter = ownProps.match.params.filter;
  let filtred = [];
  if (filter === 'favourites') {
    filtred = getFavouritesEvents(events.list, events.favourites)
  } else {
    filtred = filter ? getFiltredEvents(events.list, filter) : events.list;
  }

  const props = {
    events: filtred,
    isLoading: events.loading,
    isError: events.error,
    order: events.order,
    filter,
    favourites: events.favourites,
  };
  return props;
};

const mapDispatchToProps = (dispatch) => ({
  toggleEventsOrder: () => dispatch(toggleEventsOrder()),
});

const Events = (props) => {

  if (props.isError) return <Error error='Произошла ошибка' />;
  if (props.isLoading) return <Loader />;

  const { events, order, toggleEventsOrder, filter } = props;

  const title = filter ? routes.find(route => route.filter === filter).name : 'События в городе';
  if (events.length < 1) return <h2>Нет событий в разделе: "{title}"</h2>

  const btnTitle = order === 'asc' ? 'по возрастанию' : 'по убыванию';
  const eventsSortedList = sortEvents(events, order);

  return (
    <>
      <div className='events__header'>
        <h1 className='events__title'>{title}</h1>
        <button
          onClick={() => toggleEventsOrder()}
          className={`order-toggler ${order}`}
          title={btnTitle}
        >
          <SortIcon width='1.5rem' height='1.5rem' />
        </button>
      </div>

      <EventsList list={eventsSortedList} favourites={props.favourites} />
    </>
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Events);
