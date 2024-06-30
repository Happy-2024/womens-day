import React from 'react'
import "./Otp.css"
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router';
const Otp = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/home')
    }

  return (
    <div>
        <Navbar/>
            <h2 className='text-center mt-5'>OTP</h2>
            <div className="login-container">
                <form className="login-form">
                    <label htmlFor="otp" className='mobile'>Enter OTP *</label>
                    <input 
                        type="number" 
                        id="otp" 
                        name="otp" 
                        placeholder="Enter OTP" 
                    />
                    <button type="submit" className="login-button" onClick={()=>goToHome()}>Verify OTP</button>
                    <p className="signup-text">
                        <a href='/login' >Resend OTP</a>
                    </p>
                </form>
            </div>
            <Footer/>
        </div>
    );
};
        
export default Otp