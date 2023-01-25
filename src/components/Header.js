import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import classes from './Header.module.css';

const Header = () => (
  <header className={classes.header}>
    <nav className={classes.navbar}>
      <div className={classes.nav_brand}>
        <Link to="/">
          <h1>Bookstore CMS</h1>
        </Link>
      </div>
      <ul className={classes.nav_items}>
        <li className={classes.nav_item}>
          <NavLink to="/">BOOK</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className={classes.user_action}>
        <button type="button">
          <FaUser className={classes.user_icon} />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
