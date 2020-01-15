import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TagsLine from '../../shared/components/TagsLine';
import ButtonStar from '../../shared/components/ButtonStar';

import { addFavourite, deleteFavourite } from '../App/eventsActions';

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (id) => dispatch(addFavourite(id)),
  deleteFavourite: (id) => dispatch(deleteFavourite(id)),
});

const EventsList = (props) => {

  const handleFavouriteClick = () => {
    if (props.isFavourite) {
      props.deleteFavourite(props.id)
    } else {
      props.addFavourite(props.id);
    }
  };

  const { title, is_free, categories, price, slug, isFavourite } = props;

  return (
    <li className="event">
      <div className='event__actions'>
        <Link to={`/events/${slug}`} className="event__link">{title}</Link>
        <ButtonStar onClick={handleFavouriteClick} isFavourite={isFavourite} />
      </div>
      {is_free && <span className='event__label'>Бесплатно!</span>}

      {price && <span className='event__price'>{price} р.</span>}

      <TagsLine tags={categories} />
    </li>
  );
}

export default connect(null, mapDispatchToProps)(EventsList);
