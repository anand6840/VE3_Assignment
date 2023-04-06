import React from 'react'
import BgImg from './background-image-2.png';
import './home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export const Home2 = () => {
  return (
    <div className='home1-main'>
      <img className='BgImg' src={BgImg} alt="BgImg" />
      <div className='home-data'>
      <Link style={{textDecoration: 'none'}} className="Module-enter-link" to={'/module1'}>
					<div>
						Module One
						
					</div>
				</Link>
        <Link style={{textDecoration: 'none'}} className="Module-enter-link" to={'/module2'}>
					<div>
          Module Two
					
					</div>
				</Link>
        <Link style={{textDecoration: 'none'}} className="Module-enter-link" to={'/module3'}>
					<div>
          Module Three
						
					</div>
				</Link>
        <Link style={{textDecoration: 'none'}} className="Module-enter-link" to={'/module4'}>
					<div>
          Module Four
						
					</div>
				</Link>
        <Link style={{textDecoration: 'none'}} className="Module-enter-link" to={'/module5'}>
					<div>
          Module Five
						
					</div>
				</Link>
       
        <Link style={{textDecoration: 'none'}} className="home-enter-link" to={'/options'}>
					<div>
						Select Module
						<FontAwesomeIcon icon={faArrowRightLong} />
					</div>
				</Link>
      </div>
    </div>
  )
}
