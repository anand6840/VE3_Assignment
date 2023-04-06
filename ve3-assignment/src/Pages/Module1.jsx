import React from 'react'
import './Pages.css'
import BgImg from './background-image-2.png';
import M1I1 from '../Images/m1t1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faHouse } from '@fortawesome/free-solid-svg-icons';

export const Module1 = () => {
  return (
    
    <div className='module-main'>
    <img className='BgImg' src={BgImg} alt="BgImg" />
    <Link className='home-btn'  to={'/'}>
					<div>
         
            <FontAwesomeIcon icon={faHouse} size="xl" style={{color: "#8e8f90",}} />
         
					</div>
				</Link>
    {/* <h1>Module 1</h1> */}
    <div className='module-data'>
    <div className='subnav'>
    <div>Tab1</div>
    <div>Tab2</div>
    <div>Tab3</div>
    </div>
      <div>
      <img className='M1I1' src={M1I1} alt="BgImg" />
      </div>
      <div className='module-text'>
      <h1>Fusce sem magna pharetra cursus</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
      </div>
    </div>
  </div>
  )
}
