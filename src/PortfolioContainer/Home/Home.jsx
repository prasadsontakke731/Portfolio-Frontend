import React from 'react';
import './Home.css';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Header from './Header/Header';
import AboutMe from '../AboutMe/AboutMe';

export default function Home(props) {
  return (
    <div className='home-container' id={props.id || ''}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
