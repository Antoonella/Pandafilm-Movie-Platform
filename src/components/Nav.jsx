import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Nav() {
  return (
    <nav>
      <div className="nav__container">
      <Link to="/">
      <img src={Logo} className='logo' alt="" />
      </Link>
      <ul className="nav__links">
        <li className="nav__list">
          <Link to="/" className='nav__link link__hover-effect link__hover-effect--white'>
            Home
          </Link>
        </li>
        <li className="nav__list">
          <Link to="/movie" className='nav__link link__hover-effect link__hover-effect--white'>
            Find your movie
          </Link>
        </li>
        <li className="nav__list">
          <span className='nav__link no-cursor'>Contact</span>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav