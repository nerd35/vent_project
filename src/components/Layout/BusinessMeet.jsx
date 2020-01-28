import React from 'react';
import './Style.css';
import BusinessImg from '../assets/imac.png';

const BusinessMeet = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-sm-12 text-center'>
          <i className='fas fa-microphone-alt business-icon fa-3x mt-5'></i>
          <h3 className='mt-3 business-title'>Business meets Innovation</h3>
          <p className='text-secondary'>
            Starting your own IT business and picking right niche in less then{' '}
            <i className='text-warning'>30 days</i>
          </p>
        </div>
        <div className='col-lg-12 mx-auto col-sm-12 '>
          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            <li className='nav-item'>
              <a
                className='nav-link1 home-tab text-warning active'
                id='home-tab'
                data-toggle='tab'
                href='#home'
                role='tab'
                aria-controls='home'
                aria-selected='true'
              >
                <i className='fas fa-code ml-5 mr-4 text-warning'></i>
                General info
              </a>
            </li>
            <li className='nav-item mx-auto'>
              <a
                className='nav-link1 '
                id='profile-tab'
                data-toggle='tab'
                href='#profile'
                role='tab'
                aria-controls='profile'
                aria-selected='false'
              >
                <i className='fas fa-rockety mr-4 '></i>
                Profile
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link1'
                id='contact-tab'
                data-toggle='tab'
                href='#contact'
                role='tab'
                aria-controls='contact'
                aria-selected='false'
              >
                Contact
              </a>
            </li>
          </ul>
          <div className='tab-content' id='myTabContent'>
            <div
              className='tab-pane fade show active'
              id='home'
              role='tabpanel'
              aria-labelledby='home-tab'
            >
              <div className='container mt-3'>
                <div className='row'>
                  <div className='col-lg-5 col-sm-12 mt-3'>
                    <img src={BusinessImg} alt='businessimg' className='ml-5' />
                  </div>
                  <div className='col-lg-6 col-sm-12 mt-3 ml-5 '>
                    <h3 className='ml-5 business-section-title'>
                      About Event
                    </h3>
                    <p className='ml-5 business-section-text'>
                      Faucibus sed pretium. Ridiculus consectetuer et. In arcu
                      enim sit in libero scelerisque mauris sed. Nullam eleifend
                      in varius arcu vitae feugiat magna id ut morbi
                      consectetuer. In vivamus arcu. Id ut dui. Sed massa in.
                      Scelerisque suscipit quisque maecenas aliquet in. Wisi mi
                      ipsum. Elit et mauris. Duis in magni praesent content
                      massa.
                      <br />
                      <br />
                      Consectetuer amet wisi felis sem tincidunt. Ultricies
                      blandit id euismod inceptos mauris pulvinar nec nullam
                      quisque consequat nulla eleifend elementum vivamus aliquam
                      placerat nec. Vehicula leo praesent vitae leo mauris
                      ullamcorper lectus sed mollis id turpis dui cras
                      suspendisse. Porta diam eleifend. Praesent magnis sit.
                      Enim ligula vel justo urna.
                      <br />
                      <br />
                      Nisl cras vitae wisi odio amet.
                      <br />
                      Lacus amet vestibulum belas
                      <br />
                      Quis nunc curabitur assumenda
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='profile'
              role='tabpanel'
              aria-labelledby='profile-tab'
            >
              <div className='container mt-3'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-12 mt-3 ml-5 '>
                    <h3 className='ml-5 business-section-title text-right'>Workshop</h3>
                    <p className='ml-5 business-section-text text-right'>
                      Faucibus sed pretium. Ridiculus consectetuer et. In arcu
                      enim sit in libero scelerisque mauris sed. Nullam eleifend
                      in varius arcu vitae feugiat magna id ut morbi
                      consectetuer. In vivamus arcu. Id ut dui. Sed massa in.
                      Scelerisque suscipit quisque maecenas aliquet in. Wisi mi
                      ipsum. Elit et mauris. Duis in magni praesent content
                      massa.
                      <br />
                      <br />
                      Consectetuer amet wisi felis sem tincidunt. Ultricies
                      blandit id euismod inceptos mauris pulvinar nec nullam
                      quisque consequat nulla eleifend elementum vivamus aliquam
                      placerat nec. Vehicula leo praesent vitae leo mauris
                      ullamcorper lectus sed mollis id turpis dui cras
                      suspendisse. Porta diam eleifend. Praesent magnis sit.
                      Enim ligula vel justo urna.
                      <br />
                      <br />
                      Nisl cras vitae wisi odio amet.
                      <br />
                      Lacus amet vestibulum belas
                      <br />
                      Quis nunc curabitur assumenda
                    </p>
                  </div>
                  <div className='col-lg-5 col-sm-12 mt-3'>
                    <img src={BusinessImg} alt='businessimg' className='ml-5' />
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='contact'
              role='tabpanel'
              aria-labelledby='contact-tab'
            >
              <div className='container mt-3'>
                <div className='row'>
                  <div className='col-lg-5 col-sm-12 mt-3'>
                    <img src={BusinessImg} alt='businessimg' className='ml-5' />
                  </div>
                  <div className='col-lg-6 col-sm-12 mt-3 ml-5 '>
                    <h3 className='ml-5 business-section-title'>About event</h3>
                    <p className='ml-5 business-section-text'>
                      Faucibus sed pretium. Ridiculus consectetuer et. In arcu
                      enim sit in libero scelerisque mauris sed. Nullam eleifend
                      in varius arcu vitae feugiat magna id ut morbi
                      consectetuer. In vivamus arcu. Id ut dui. Sed massa in.
                      Scelerisque suscipit quisque maecenas aliquet in. Wisi mi
                      ipsum. Elit et mauris. Duis in magni praesent content
                      massa.
                      <br />
                      <br />
                      Consectetuer amet wisi felis sem tincidunt. Ultricies
                      blandit id euismod inceptos mauris pulvinar nec nullam
                      quisque consequat nulla eleifend elementum vivamus aliquam
                      placerat nec. Vehicula leo praesent vitae leo mauris
                      ullamcorper lectus sed mollis id turpis dui cras
                      suspendisse. Porta diam eleifend. Praesent magnis sit.
                      Enim ligula vel justo urna.
                      <br />
                      <br />
                      Nisl cras vitae wisi odio amet.
                      <br />
                      Lacus amet vestibulum belas
                      <br />
                      Quis nunc curabitur assumenda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMeet;
