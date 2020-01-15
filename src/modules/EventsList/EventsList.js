import React from 'react';

import EventsListItem from './EventsListItem';

import './eventsList.scss';

const EventsList = (props) => {
  return (
    <ul className="events">
      {props.list.map(item => {
        const isFavourite = props.favourites.find(f => item.id === f) || false;
        return <EventsListItem {...item} key={item.id} isFavourite={isFavourite}/>
      })}
    </ul>
  );
}

export default EventsList;
