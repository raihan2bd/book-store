import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">BOOK</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div>User Action</div>
    </nav>
  </header>
);

export default Header;
