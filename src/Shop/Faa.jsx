import React from 'react';
import IMG1 from '../assets/images/shop1.png';
import IMG2 from '../assets/images/shop2.png';
import IMG3 from '../assets/images/shop3.png';
import IMG4 from '../assets/images/shop4.png';

const Faa = () => {
  return (
    <div className='mt-5 d-flex flex-row justify-content-around'>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG1} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>FREE SHIPPING</h6>
          <p>Capped at Rs. 10 per order</p>
        </div>
      </div>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG2} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>SECURE PAYMENTS</h6>
          <p>Up to 6 months installments</p>
        </div>
      </div>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG3} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>
          15-DAYS RETURNS</h6>
          <p>Shop with fully confidence</p>
        </div>
      </div>
      <div className='d-flex flex-row align-items-start'>
        <img src={IMG4} alt="" />
        <div className='d-flex flex-column ms-3'>
          <h6>24X7 FULLY SUPPORT</h6>
          <p>Get friendly support</p>
        </div>
      </div>
    </div>
  );
}

export default Faa;
