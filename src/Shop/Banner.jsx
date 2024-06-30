import React, { useState } from 'react';
import Bann from '../assets/images/bann.png';
import { Link } from 'react-router-dom';
import './Banner.css'; // Make sure to import the CSS file

const Banner = ({ setShopItem }) => {
  const [activeLink, setActiveLink] = useState(null);

  const shopNavigate = (key) => {
    setShopItem(key);
    setActiveLink(key); // Set the active link to highlight
  };

  return (
    <div className="banner">
      <img src={Bann} alt="Banner" className="img-fluid" />
      <h2>SHOP</h2>
      <div className="text">
        <Link
          to="#"
          className={activeLink === 'bestSeller' ? 'active' : ''}
          onClick={() => shopNavigate('bestSeller')}
        >
          Best Seller
        </Link>
        <Link
          to="#"
          className={activeLink === 'period' ? 'active' : ''}
          onClick={() => shopNavigate('period')}
        >
          Period Care
        </Link>
        <Link
          to="#"
          className={activeLink === 'hairSkin' ? 'active' : ''}
          onClick={() => shopNavigate('hairSkin')}
        >
          Hair Skin Care
        </Link>
        <Link
          to="#"
          className={activeLink === 'health' ? 'active' : ''}
          onClick={() => shopNavigate('health')}
        >
          Health Skin Care
        </Link>
      </div>
    </div>
  );
};

export default Banner;
