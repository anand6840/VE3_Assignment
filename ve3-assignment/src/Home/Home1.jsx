import React from 'react'
import BgImg from './background-image-2.png';
import women from './img-1.png';
import './home.css'


export const Home1 = () => {
  return (
    <div className='home1-main'>
      <img src={BgImg} alt="BgImg" />;
      <img className='women' src={women} alt="women" />;
    </div>
  )
}
