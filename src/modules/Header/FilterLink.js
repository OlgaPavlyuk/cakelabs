import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    activeClassName="active"
    className='menu__link'
    to={filter === '' ? '/' : `/${filter}`}
  >
    {children}
  </NavLink>
)

export default FilterLink;
