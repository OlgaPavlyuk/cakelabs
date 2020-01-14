import React from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../../services/selectors';
import Error from '../../shared/components/Error';
import TagsLine from '../../shared/components/TagsLine';
import LocationIcon from '../../shared/icons/Location';

import cn from 'classnames';

import './event.scss';

const mapStateToProps = ({ events }, ownProps) => {
  const slug = ownProps.match.params.event;
  const event = getEvent(events.list, slug);
  const props = {
    event,
    isLoading: events.loading,
    error: events.error
  };

  return props;
};

const Event = (props) => {

  if (props.error) return <Error error='Произошла ошибка' />;
  if (props.isLoading) return <div>Loading</div>

  const { title, price, date, description, image, is_free, place, categories, body } = props.event;

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
      <h2 className='page-event__description'>{description}</h2>

      <div className='page-event__info'>
        <time className='page-event__date' dateTime={date}>{dateStr}</time>
        {place &&
          <div className='page-event__place'>
            <LocationIcon height='2rem' width='2rem' />
              {place}
          </div>
        }
        <div className={priceClasses}>
          {price || (is_free && 'Бесплатно')}
        </div>
      </div>
      
      <p>{body}</p>

      <TagsLine tags={categories} />

    </div>
  );
}

export default connect(mapStateToProps)(Event);
