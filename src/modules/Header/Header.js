import React from 'react';
import FilterLink from './FilterLink';
import routes from '../../redux/routes';

import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='menu'>
          {routes.map((route) => <FilterLink key={route.filter} filter={route.filter}>{route.name}</FilterLink>)}
        </nav>
      </div>
    </header>
  );
}

export default Header;