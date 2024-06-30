import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Shop from '../Shop/index.jsx';
import Page from '../Product/Index.jsx';
import Cart from '../Cartitems/Index.jsx';
import Checkout from '../Checkout/Index.jsx';
import Placedorder from '../Checkout/Placedorder.jsx';
import Dashboard from '../Dashboard/Index.jsx';
import LoginForm from '../Login/LoginForm.jsx'
import Otp from '../Login/Otp.jsx';
import Signup from '../Login/Signup.jsx';
export const Routeroot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id"   element={< Page/>} />
        <Route path='/cartitem/:id' element={<Cart/>}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
        <Route path='/order' element={<Placedorder/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};
