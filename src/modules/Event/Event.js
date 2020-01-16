import React from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../../services/selectors';
import { addFavourite, deleteFavourite } from '../App/eventsActions';

import cn from 'classnames';

import ButtonStar from '../../shared/components/ButtonStar';
import Error from '../../shared/components/Error';
import Loader from '../../shared/components/Loader';

import TagsLine from '../../shared/components/TagsLine';
import LocationIcon from '../../shared/icons/Location';
import RubleIcon from '../../shared/icons/Ruble';
import CalendarIcon from '../../shared/icons/Calendar';

import './event.scss';

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (id) => dispatch(addFavourite(id)),
  deleteFavourite: (id) => dispatch(deleteFavourite(id)),
});

const mapStateToProps = ({ events }, ownProps) => {
  const slug = ownProps.match.params.event;
  const event = getEvent(events.list, slug);
  const props = {
    event,
    isLoading: events.loading,
    error: events.error,
    favourites: events.favourites,
  };

  return props;
};

const Event = (props) => {

  if (props.error) return <Error error='Произошла ошибка' />;
  if (props.isLoading) return <Loader />;

  const { id, title, price, date, description, is_free, place, categories, body } = props.event;
  const isFavourite = props.favourites.find(f => id === f) || false;

  const handleFavouriteClick = () => {
    if (isFavourite) {
      props.deleteFavourite(props.event.id)
    } else {
      props.addFavourite(props.event.id);
    }
  };

  const dateStr = new Date(date).toLocaleString("ru", {
    year: 'numeric',
    month: 'long',
    day: 'numeric', hour: 'numeric',
    minute: 'numeric'
  });

  const priceClasses = cn({
    'page-event__price': true,
    'page-event__price--free': is_free,
  });

  return (
    <div className='page-event'>
      <h1 className='page-event__title'>{title}</h1>
      <ButtonStar onClick={handleFavouriteClick} isFavourite={isFavourite} />
      <h2 className='page-event__description'>{description}</h2>

      <div className='page-event__info'>
        <time className='page-event__date' dateTime={date}>
          <CalendarIcon height='1.5rem' width='1.5rem'/>
          {dateStr}</time>
        {place &&
          <div className='page-event__place'>
            <LocationIcon height='1.5rem' width='1.5rem' />
              {place}
          </div>
        }
        <div className={priceClasses}>
          <RubleIcon height='1.75rem' width='1.5rem' />
          {price || (is_free && 'Бесплатно')}
        </div>
      </div>
      <p>{body}</p>
      <TagsLine tags={categories} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
