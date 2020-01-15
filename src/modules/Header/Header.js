import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import routes from '../../redux/routes';

import './header.scss';

const mapStateToProps = ({ events }) => ({
  favourites: events.favourites,
});

const Header = (props) => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='menu'>
          {routes.map((route) =>
            <FilterLink
              key={route.filter}
              filter={route.filter}
              favouritesCount={props.favourites.length}
              title={route.name}
            />)}
        </nav>
      </div>
    </header>
  );
}

export default connect(mapStateToProps)(Header);