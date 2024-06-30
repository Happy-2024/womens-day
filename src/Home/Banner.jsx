import React from 'react';
import Bann from '../assets/images/bann.png';
import './Banner.css';
import arrow from '../assets/images/arrow.png';
import { useNavigate } from 'react-router-dom'; // Correct import from react-router-dom

const Banner = () => {
  const navigate = useNavigate();
  
  const goToShop = () => {
    navigate("/shop");
  };
  
  return (
    <section>
      <div className="banner">
        <img src={Bann} alt="Banner" width="100%" /> 
        <div className="banner1">
          <p className="mt-2 text-danger">Winter Collection</p>
          <p className="p1">New Winter<br />Collections 2024</p>
          <p className="p2">There's nothing like Trend'</p>
          <br />
          <button className="shopnow" onClick={goToShop}>
            Shop Now <div style={{width:'80px', alignItems:'center', alignSelf:'center'}}> <img src={arrow}  alt="arrow icon" /></div> 
             </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
