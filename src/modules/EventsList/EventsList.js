import React from 'react';
import { Link } from 'react-router-dom';

import TagsLine from '../../shared/components/TagsLine';

import './eventsList.scss';

const EventsList = (props) => {
  
  const renderList = (cityEvent) => {
    const { id, title, is_free, categories, price, slug } = cityEvent;
    return (
      <li className="event" key={id}>
        <Link to={`/events/${slug}`} className="event__link">{title}</Link>
        
        {is_free && <span className='event__label'>Бесплатно!</span>}

        {price && <span className='event__price'>{price} р.</span>}

        <TagsLine tags={categories} />
      </li>
    );
  }

  return (
    <ul className="events">
      {props.list.map(renderList)}
    </ul>
  );
}

export default EventsList;