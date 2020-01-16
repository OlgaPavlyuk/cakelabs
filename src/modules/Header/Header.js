import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import routes from '../../redux/routes';
import cn from 'classnames';

import './header.scss';

const mapStateToProps = ({ events }) => ({
  favourites: events.favourites,
});

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  const onWindowResize = () => setIsMobile(window.innerWidth < 991);

  useEffect(() => {
    isOpen ? document.body.classList.add('menu-is-open') : document.body.classList.remove('menu-is-open');
  });

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return function () { 
      window.removeEventListener('resize', onWindowResize);
    }
  });

  const handleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__inner'>
          <button className='burger' onClick={handleMenuOpen}>
            <span className='burger__line'></span>
          </button>
          <nav className={cn({
            'menu': true,
            'is-open': isOpen,
          })}>
            {routes.map((route) =>
              <FilterLink
                key={route.filter}
                filter={route.filter}
                favouritesCount={props.favourites.length}
                title={route.name}
                onClick={isMobile ? handleMenuOpen : null }
              />)}
            <button className='menu__btn-close' onClick={handleMenuOpen}></button>
          </nav>
          <div className='menu__overlay' onClick={handleMenuOpen}></div>
          {/* <div className='search'>
                  
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default connect(mapStateToProps)(Header);