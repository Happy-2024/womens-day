import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
const Signup = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/home')
    }
  return (
    <div>
        <Navbar/>
         <h2 className='text-center mt-5'>SIGNUP</h2>
        <div className="login-container">
            <form className="login-form">
                <label htmlFor="firstName" className='mobile'>First Name *</label>
                <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Enter Your First Name" 
                />
                <label htmlFor="Email" className='mobile'>Email </label>
                <input 
                    type="text" 
                    id="Email" 
                    name="Email" 
                    placeholder="Enter Your Email" 
                />
                <label htmlFor="Email" className='mobile'>Mobile Number</label>
                <input 
                    type="text" 
                    id="mobileNumber" 
                    name="mobileNumber" 
                    placeholder="Enter Mobile Number" 
                />
                <button type="submit" className="login-button" onClick={()=>goToHome()}>Sign UP</button>
                <p className="signup-text"> <a href="/login">Back to Login</a>
                </p>
            </form>
        </div>
        <Footer/>
        </div>
  )
}

export default Signup