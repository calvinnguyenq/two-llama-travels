import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <Link to='/about-us'>
                    <h2>About Us</h2>
                </Link>
            </div>
            <div class='footer-link-items'>
                <Link to='/contact-us'>
                    <h2>Contact Us</h2>
                </Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                A TwoLlama Company
                <i class='fab fa-typo3' />
              </Link>
            </div>
            <small class='website-rights'>TwoLlama Travels © 2021</small>
          </div>
        </section>
      </div>
    )
}

export default Footer;

