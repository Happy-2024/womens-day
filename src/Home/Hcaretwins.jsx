import React, { useState } from 'react';
import Img1 from '../assets/images/hc1.png';
import Img2 from '../assets/images/hc2.png';
import Img3 from '../assets/images/hc3.png';
import Img4 from '../assets/images/hc4.png';
import { FaIndianRupeeSign } from "react-icons/fa6";
import cart from '../assets/images/cart.png';
import CommonButton from './CommonButton';
import { useNavigate } from 'react-router';
import H from '../assets/images/H.png';
import './BestSeller.css';
import RH from '../assets/images/redheart.jpeg';

const Hcaretwins = () => {
  const navigate = useNavigate();

  const [likedItems, setLikedItems] = useState([]);  // Correct initialization

  const Cardhandle = (id, item) => {
    sessionStorage.setItem('oneItem', JSON.stringify(item));
    navigate(`/product/${id}`);
  };

  const goToCard = (id, item) => {
    navigate(`/cartitem/${id}`);
    sessionStorage.setItem('oneItem', JSON.stringify(item));
  };
 
  const toggleLike = (id) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.includes(id)) {
        return prevLikedItems.filter(item => item !== id);
      } else {
        return [...prevLikedItems, id];
      }
    });
  };

  const products = [
    { id: 1, name: "Half Running Set", price: "119.00", photo: Img1 },
    { id: 2, name: "Half Running Set", price: "119.00", photo: Img2 },
    { id: 3, name: "Half Running Set", price: "119.00", photo: Img3 },
    { id: 4, name: "Half Running Set", price: "119.00", photo: Img4 }
  ];

  return (
    <div>
      <h2 className='text-center mt-3'>HEALTH CARE TWINS</h2>
      <div className='container mt-4 d-flex flex-row justify-content-around flex-wrap'>
        <div className="row">
          {products.map((item, index) => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={index}>
              <div className="card position-relative">
                <img src={item.photo} alt={item.name} className="w-100 h-100" onClick={() => Cardhandle(item.id, item)} />
                <img 
                  src={likedItems.includes(item.id) ? RH : H} 
                  alt="Heart" 
                  className='heart' 
                  style={likedItems.includes(item.id) ? { cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50px' } : { cursor: 'pointer' }} 
                  onClick={() => toggleLike(item.id)} 
                />
                <button className="cart_btn" onClick={() => goToCard(item.id, item)} >
                  <img src={cart} alt="Cart" />&nbsp;
                  Add to Cart
                </button>
                <div className='card-body'>
                  <p className='card-title'>{item.name}</p>
                  <p className='card-text'>
                    <FaIndianRupeeSign /> {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 mt-5">
            <CommonButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hcaretwins;
