import React, { useState } from 'react';
import Img1 from '../assets/images/bs3.png';
import Img2 from '../assets/images/bss1.png';
import Img3 from '../assets/images/bss2.png';
import Img4 from '../assets/images/bss3.png';
import { FaIndianRupeeSign } from "react-icons/fa6";
import cart from '../assets/images/cart.png';
import CommonButton from './CommonButton';
import { useNavigate } from 'react-router';
import H from '../assets/images/H.png';
import './BestSeller.css';
import RH from '../assets/images/redheart.jpeg';

const BestSeller = () => {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState([false]);

  const Cardhandle = (id,item) => {
    sessionStorage.setItem('oneItem', JSON.stringify(item));
    navigate(`/product/${id}`);
  };
  
  const goToCard = (id,item) => {
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

  const arrayobject = [
    { id: 1, name: "Half Running Set", price: "119.00", photo: Img1 },
    { id: 2, name: "Half Running Set", price: "119.00", photo: Img2 },
    { id: 3, name: "Half Running Set", price: "119.00", photo: Img3 },
    { id: 4, name: "Half Running Set", price: "119.00", photo: Img4 }
  ];

  return (
    <div>
      <h2 className='text-center mt-3'>BEST SELLER</h2>
      <div className='container mt-4 d-flex flex-row justify-content-around flex-wrap'>
        <div className="row">
          {arrayobject.map((item, index) => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={index}>
              <div className="card position-relative">
                <img 
                  style={{ cursor: 'pointer' }} 
                  src={item.photo} 
                  alt={item.name} 
                  className="w-100 h-100" 
                  onClick={() => Cardhandle(item.id,item)} 
                />
                <img 
                  src={likedItems.includes(item.id) ? RH : H} 
                  alt="Heart" 
                  className='heart' 
                  style={likedItems.includes(item.id) ? { cursor: 'pointer', width: '40px', height: '40px',borderRadius:'50px' } : { cursor: 'pointer' }} 
                  onClick={() => toggleLike(item.id)} 
                />
                <button className="cart_btn" onClick={() => goToCard(item.id,item)}>
                  <img src={cart} alt="Cart" />&nbsp;
                  Add to Cart
                </button>
                <div className='card-body'>
                  <p className='card-title'>{item.name}</p>
                  <p className='card-text'>
                    <FaIndianRupeeSign />{item.price}
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

export default BestSeller;
