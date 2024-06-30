import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Img1 from '../assets/images/D1.png';
import Img2 from '../assets/images/D2.png';
import Img3 from '../assets/images/D3.png';
import Img4 from '../assets/images/D4.png';
import Img5 from '../assets/images/D5.png';
import Dl from '../assets/images/dl.png';
import './Address.css'
import xr from '../assets/images/xred.png'
const Address = () => {
    return (
        <>
            <Navbar />
            <div className="overall">
                <div className="sidebar">
                    <div className="profile-container">
                        <div className="profile-details">
                            <div className="profile-icon">
                                <img src={Dl} alt="" />
                            </div>
                            <h5>Adam Wishnoi</h5>
                            <p>9876543210</p>
                            <hr />
                        </div>
                    </div>
                    <ul>
                        <li className="item">
                            <img src={Img1} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="link" href="#">
                                My Orders
                            </a>
                        </li>
                        <hr />
                        <li className="item">
                            <img src={Img2} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="link" href="#">
                                Wishlist
                            </a>
                        </li>
                        <hr />
                        <li className="item">
                            <img src={Img3} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="link" href="#">
                                Addresses
                            </a>
                        </li>
                        <hr />
                        <li className="item">
                            <img src={Img4} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="link" href="#">
                                Profile Info
                            </a>
                        </li>
                        <hr />
                        <li className="item">
                            <img src={Img5} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="link" href="#">
                                Logout
                            </a>
                        </li>
                        <hr />
                    </ul>
                </div>
                <div className='Address'>
                        <div className='Home-Address'>
                            <div className='icon'>
                                <h4>Home Address </h4>
                                <img src={xr} alt="" />
                            </div>    <hr />
                            <p>
                                Email:
                            </p>
                        </div>
                   
                    <div style={{ flexDirection: 'column', marginTop:'50px' }}>
                        <button className='btn-Address'>
                            + Add New Address
                        </button>
                    </div>
                </div>
               </div>
         
            <Footer />
        </>
    );
};

export default Address;
