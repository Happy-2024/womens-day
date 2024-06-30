// src/Cartitems/Index.jsx
import React from 'react';
import Navbar from '../Home/Navbar';
import CartItems from './CartItems';
import Footer from '../Home/Footer'

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartItems />
      <Footer/>
    </div>
  );
};

export default Cart;
