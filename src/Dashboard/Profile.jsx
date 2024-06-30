import React from 'react'
import Img1 from '../assets/images/D1.png';
import Img2 from '../assets/images/D2.png';
import Img3 from '../assets/images/D3.png';
import Img4 from '../assets/images/D4.png';
import Img5 from '../assets/images/D5.png';
import Dl from '../assets/images/dl.png';
import './Profile.css';


const Profile = () => {
  return (
    <div className="overall">
    <div className="sidebar">
    <div className="profile-container">
        <div className="profile-details">
            <div className="profile-icon">
                <img src={Dl} alt="" />
            </div>
            <h5>Adam Wishnoi</h5>
            <p>9876543210</p><hr />
        </div>
    </div>
        <ul>
            <li className="item">
                <img src={Img1} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="link" href="#">
                    My Orders
                </a>
            </li><hr/>
            <li className="item">
                <img src={Img2} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="link" href="#">
                    Wishlist
                </a>
            </li><hr/>
            <li className="item">
                <img src={Img3} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="link" href="#">
                    Addresses
                </a>
            </li><hr/>
            <li className="item">
                <img src={Img4} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="link" href="#">
                    Profile Info
                </a>
            </li><hr/>
            <li className="item">
                <img src={Img5} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="link" href="#">
                    Logout
                </a>
            </li><hr/>
        </ul>
    </div>
    <div className="form-group">
            <div className='labelMain'>
              <div className='labelName'>
            <label >First Name</label>
            <input  type="text" name="firstName" />
              </div>
              <div className='labelName'>
            <label>Last Name</label>
            <input type="text" name="lastName" />
            </div>
            </div>
            <div className="form-group">
            <label>Date of Birth</label>
            <input  type="text" name="DOB" placeholder='MM/DD/YYYY' />
          </div>
            <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" name="number" placeholder='Enter your Number' />
          </div>
            <div className="form-group">
            <label>Alternate Mobile Number</label>
            <input type="text" name="number" placeholder='Enter your Number' />
          </div>
            <div className="form-group">
            <label>Email</label>
            <input type="mail" name="mail" placeholder='Enter your Mail' />
          </div>
          <button type="submit">Update Profile </button>
          </div>
    </div>
  )
}

export default Profile