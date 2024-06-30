import React from 'react'
import Navbar from '../Home/Navbar';
import LoginForm from './LoginForm';
import Footer from '../Home/Footer';
import Signup from './Signup';
import Otp from './Otp';
const Index = () => {
  return (
    <div>
        <LoginForm/>
        <Signup/>
        <Otp/>
       
    </div>
  )
}

export default Index