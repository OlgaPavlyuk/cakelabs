import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, title, favouritesCount }) => {
  const count = filter === 'favourites' ? ` (${favouritesCount})` : '';
  return (
    <NavLink
      exact
      activeClassName="active"
      className='menu__link'
      to={filter === '' ? '/' : `/${filter}`}
    >
      {title}{count}
    </NavLink>
  );
};

export default FilterLink;
