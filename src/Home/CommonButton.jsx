import React from 'react'
import Img from '../assets/images/arrow.png';
function CommonButton() {
  return (
    <>
    <div className='text-center my-4'>
    <button className='btn border'>Explore More 
        <img src={Img} alt="" />
    </button>
    </div>
    </>
  )
}

export default CommonButton;