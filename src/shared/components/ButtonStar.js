import React from 'react';
import cn from 'classnames';

import StarIcon from '../../shared/icons/Star';

const ButtonStar = (props) => {

  const { isFavourite, onClick } = props;

  const btnClasses = cn({
    'favourites-toggler': true,
    'active': isFavourite,
  });

  return (
    <button
      className={btnClasses}
      title='добавить событие в избранное'
      onClick={onClick}
    >
      <StarIcon width='2rem' height='2rem' />
    </button>
  );
};

export default ButtonStar;
