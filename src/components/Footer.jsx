import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
    <div className="footer__container">
      <div className="row row__column">
        <Link to="/">
          <figure className='footer__logo'>
            <img src={Logo} className='footer__logo--img' alt="" />
          </figure>
        </Link>
        <div className="footer__list">
          <Link to="/" className='footer__link'>Home</Link>
          <span className='footer__link no-cursor'>About</span>
          <Link to="/movie" className='footer__link'>Movies</Link>
          <span className='footer__link no-cursor'>Contact</span>
        </div>
        <div className="footer__copyright">
         &copy; Pandafilm. All rights reserved.
        </div>
      </div>
    </div> 
   </footer>
  )
}

export default Footer;