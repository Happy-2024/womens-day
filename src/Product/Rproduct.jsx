import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router'; // Corrected import
import cart from '../assets/images/cart.png';
import Img1 from '../assets/images/r1.png';
import Img2 from '../assets/images/r2.png';
import Img3 from '../assets/images/r3.png';
import Img4 from '../assets/images/r4.png';
const Rproduct = () => {
  const navigate = useNavigate(); // Moved useNavigate outside of return

  const Cardhandle = (id, photo) => {
    navigate(`/product/${id}`);
  }

  const arrayobject = [
    { id: 1, name: "Half Running Set", price: "119.00", photo: Img1 },
    { id: 2, name: "Half Running Set", price: "119.00", photo: Img2 },
    { id: 3, name: "Half Running Set", price: "119.00", photo: Img3 },
    { id: 4, name: "Half Running Set", price: "119.00", photo: Img4 }
  ];

  return (
    <div>
      <h3 className='text-center my-4'>Recommended Products</h3>
      <div className='container mt-4 d-flex flex-row justify-content-around flex-wrap'>
        <div className="row">
          {arrayobject.map((item, index) => (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={index}>
              <div className="card position-relative">
                <img src={item.photo} alt={item.name} className="w-100 h-100" />
                <button className="cart_btn" onClick={() => Cardhandle(item.id, item.photo)}>
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
        </div>
      </div>
    </div>
  );
}

export default Rproduct;
