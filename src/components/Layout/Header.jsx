import React from 'react';
import './Style.css';

const Header = () => {
  return (
    <div className=' hero-image m-0 p-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-sm-12 text-center  mt-5'>
            <a
              href='https://www.twitter.com'
              alt='Iconimg'
              className='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-twitter fa-lg text-light ml-4 '></i>
            </a>
            <a
              href='https://www.facebook.com'
              alt='Iconimg'
              className='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-facebook-f fa-lg text-light ml-4'></i>
            </a>
            <a
              href='https://www.facebook.com'
              className='Iconimg'
              alt='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-github fa-lg text-light ml-4'></i>
            </a>
            <a
              href='https://www.facebook.com'
              className='Iconimg'
              alt='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-whatsapp fa-lg text-light ml-4'></i>
            </a>
            <a
              href='https://www.facebook.com'
              className='Iconimg'
              alt='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-google-plus-g fa-lg text-light ml-4'></i>
            </a>
            <a
              href='https://www.facebook.com'
              className='Iconimg'
              alt='Iconimg'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fab fa-instagram fa-lg text-light ml-4'></i>
            </a>
          </div>
          <div className='col-lg-12 col-sm-12 text-center mt-5'>
            <div className=' mt-5'>
              <h4 className='text-light'>
                <i class='far fa-calendar fa-lg  icon-cala'></i>&nbsp; 28&nbsp;
                .&nbsp; NOV &nbsp;&nbsp;{' '}
                <i class='fas fa-map-marker-alt icon-cala'></i>&nbsp;&nbsp;
                NEW&nbsp;&nbsp; YORK,&nbsp;&nbsp;NY{' '}
              </h4>
              <h1 className='ventcamp-title text-light'>VENTCAMP</h1>
              <p className='text-light ventcamp-text'>
                Massive conference about<strong> web developement</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 mt-4 text-center">
          <a href="#" alt="getticket" className="btn  px-4 get-tickets text-light mr-4">GET TICKETS </a>
          <a href="#" alt="videos" className="btn video  px-4 bg-transparent border-light text-light">VIDEO </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
