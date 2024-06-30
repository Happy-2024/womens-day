import React from 'react'
import "./Doffer.css"
import Img1 from '../assets/images/yr1.png';
import Img2 from '../assets/images/yr1.png';
import Img3 from '../assets/images/yr3.png';
import Img4 from '../assets/images/Yr4.png';
import { FaIndianRupeeSign } from "react-icons/fa6";
import CommonButton from './CommonButton';


const Yreviews = () => {
  return (
    <div>
        <h2 className='text-center mt-3'>YOUTUBE REVIEWS</h2>
    <div className='container mt-4 d-flex flex-row justify-content-around flex-wrap'>
        <div class="row">
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'> 
                <div class="card position-relative">
                    <img src={Img1} alt="" class="w-100 h-100" />
              <div className='card body'>
                <p className='card-title'>Half Running Set</p>
                <p className='card-text'>
                <FaIndianRupeeSign />119.00</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div class="card position-relative">
              <img src={Img2} alt="" class="w-100 h-100" />
              <div className='card body'>
                <p className='card-title'>Half Running Set</p>
                <p className='card-text'>
                <FaIndianRupeeSign />119.00</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div class="card position-relative">
              <img src={Img3} alt="" class="w-100 h-100" />
              <div className='card body'>
                <p className='card-title'>Half Running Set</p>
                <p className='card-text'>
                <FaIndianRupeeSign />119.00</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div class="card position-relative">
              <img src={Img4} alt="" class="w-100 h-100" />
              <div className='card body'>
                <p className='card-title'>Half Running Set</p>
                <p className='card-text'>
                <FaIndianRupeeSign />119.00</p>
                </div>
              </div>
            </div>

            <div className="col-12 mt-5">
              <CommonButton/>
            </div>
        </div>
    </div>
    </div>
  )
}
<FaIndianRupeeSign />
export default Yreviews;