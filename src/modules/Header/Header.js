import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='menu'>
          <NavLink activeClassName="active" exact to={'/events'} className='menu__link'>Все события</NavLink>
          <NavLink activeClassName="active" exact to={'/events:movie'} className='menu__link'>Кино</NavLink>
          <NavLink activeClassName="active" exact to={'/events:theatre'} className='menu__link'>Театр</NavLink>
          <NavLink activeClassName="active" exact to={'/events:science'} className='menu__link'>Наука</NavLink>
          <NavLink activeClassName="active" exact to={'/events:music'} className='menu__link'>Музыка</NavLink>
          <NavLink activeClassName="active" exact to={'/events:painting'} className='menu__link'>Живопись</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;