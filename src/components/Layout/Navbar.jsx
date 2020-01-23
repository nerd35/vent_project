import React from 'react';
import './Style.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar1-dark sticky-top bg1-dark'>
      <div className='container mt-3 mb-3'>
        <a className='navbar-brand mr-5' href='#'>
          VENTCAMP
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ml-5' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link mr-3' href='#'>
                SPEAKERS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                SCHEDULE
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                PRICES
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                GALLERY
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                SPONSORS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                CONTACTS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link mr-3' href='#'>
                ELEMENTS
              </a>
            </li>
          </ul>
          <span className='navbar-text'>
            <a href="" className=" nav-link btn bg-transparent buy-ticket text-light px-5">BUY TICKETS</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
