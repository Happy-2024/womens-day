import React from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';


const LoginForm = () => {
    const navigate = useNavigate()

    const loginToOtp =() => {
        navigate('/otp')
    }
    return (
        <>
        <Navbar/>
         <h2 className='text-center mt-5'>Login</h2>
        <div className="login-container">
            <form className="login-form">
                <label htmlFor="mobileNumber" className='mobile'>Mobile Number *</label>
                <input 
                    type="text" 
                    id="mobileNumber" 
                    name="mobileNumber" 
                    placeholder="Enter Mobile Number" 
                />
                <div className="remember-me">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label 
                    htmlFor="rememberMe"
                    className='rme'>
                        Remember me</label>
                </div>
                <button type="submit" className="login-button" onClick={()=>loginToOtp()}>Login with OTP</button>
                <p className="signup-text">
                    Don't have an Account? <a href="/signup">Sign up</a> here
                </p>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default LoginForm;
