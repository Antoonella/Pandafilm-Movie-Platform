import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <div className="nav__container">
      <Link>
      <img src={Logo} className='logo' alt="" />
      </Link>
      <ul className="nav__links">
        <li className="nav__list">
          <Link to="/" className='nav__link'>
            Home
          </Link>
        </li>
        <li className="nav__list">
          <Link to="/" className='nav__link'>
            Find your movie
          </Link>
        </li>
        <li className="nav__list">
          <Link to="/" className='nav__link'>
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav