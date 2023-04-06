import React from 'react'
import BgImg from './background-image-2.png';
import './home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Heading } from '@chakra-ui/react';


export const Home1 = () => {
  return (
    <div className='home1-main'>
      <img className='BgImg' src={BgImg} alt="BgImg" />
      <div className='home-data'>
      <Heading>Fusce sem magna pharetra cursus</Heading>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ullam, eveniet laborum aliquam aspernatur eius reiciendis a magni pariatur dolore eaque ducimus temporibus dolorem, quam eos assumenda, natus inventore sed labore odio quae quod repellat ipsam. Quidem.
				</p>
        <Link style={{textDecoration: 'none'}}  className="home-enter-link" to={'/options'}>
					<div>
						Enter
						<FontAwesomeIcon icon={faArrowRightLong} />
					</div>
				</Link>
      </div>
    </div>
  )
}
