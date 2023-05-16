import React from 'react';
import './Profile.css';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/prasad.sontakke.3705'>
                <i className='fa fa-facebook-square'></i>
              </a>

              <a href='https://www.instagram.com/prasadsontakke45/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://www.linkedin.com/in/prasad-sontakke-676814205/'>
                <i className='fa fa-linkedin'></i>
              </a>
              <a href='https://twitter.com/prasadsontakk19'>
                <i className='fa fa-twitter'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I am <span className='highlighted-text'>Prasad</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Front-End Dev',
                    1000,
                    'MERN Stcak DEV',
                    1000,
                    // 'Full Stack Developer',
                    // 1000,
                    // 'MERN Stck Dev',
                    // 1000,
                    // 'Javascript Dev',
                    // 1000,
                    // 'Front-End Dev',
                    // 1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Nack of Building the Applications with Front And Back End
                Operations
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button
              className='btn btn-primary'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {''}
              Hire Me
            </button>
            <a href='prasad.pdf' download='prasad sontakke.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
