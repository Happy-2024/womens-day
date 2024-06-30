import React from 'react';
import IMG1 from '../assets/images/re1.png';
import IMG2 from '../assets/images/re2.png';

const Rend = () => {
  return (
         <div className='mt-5 d-flex flex-row justify-content-around'>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG1} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>admin@womensdays.com</h6>
          <p>Have query? Mail us.</p>
        </div>
      </div>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG2} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>+91 79000 85000 </h6>
          <p>24/7 available</p>
        </div>
      </div>
    </div>
  )
}

export default Rend