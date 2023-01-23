import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

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
      <div>
        <button type="button">
          <FaUser />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
