import React from 'react';
import Img1 from '../assets/images/bl1.png';
import Img2 from '../assets/images/bl2.png';
import Img3 from '../assets/images/bl3.png';


const Oblogs = () => {
  return (
    <div>
         <h2 className='text-center mt-3'>OUR BLOGS</h2>
         <div className='container mt-4 d-flex flex-row justify-content-around flex-wrap'>
         <div class="row">
         <div className='col-12 col-sm-6 col-md-4 mb-4'>
            <div className="card">
                <img src={Img1} alt="" className="w-100 h-100"/>
                    </div> 
                    <div  className="card-body">
                        <p>26 JAN 2025 </p>
                        <h6>Let's start bring sale on this summer vacation.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        </div>
                </div>
         <div className='col-12 col-sm-6 col-md-4 mb-4'>
            <div className="card">
                <img src={Img2} alt="" className="w-100 h-100"/>
                    </div> 
                    <div  className="card-body">
                        <p>26 JAN 2025 </p>
                        <h6>Let's start bring sale on this summer vacation.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        </div>
                </div>
         <div className='col-12 col-sm-6 col-md-4 mb-4'>
            <div className="card">
                <img src={Img3} alt="" className="w-100 h-100"/>
                    </div> 
                    <div  className="card-body">
                        <p>26 JAN 2025 </p>
                        <h6>Let's start bring sale on this summer vacation.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Oblogs;