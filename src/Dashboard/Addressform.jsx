import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Addressform.css'; // Import custom sidebar styles
import Img1 from '../assets/images/D1.png';
import Img2 from '../assets/images/D2.png';
import Img3 from '../assets/images/D3.png';
import Img4 from '../assets/images/D4.png';
import Img5 from '../assets/images/D5.png';
import Dl from '../assets/images/dl.png';
import { useDispatch } from 'react-redux';
import { useDispatch } from "react-redux";
import { AddToaddress } from "../Redux/actions/AddressAction";
import { toast } from 'react-toastify';

const Sidebar = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    addressType: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    mobileNumber: "",
    landmark: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddToaddress(formData))
    toast.success('Address Added Successfully', {
        position: 'bottom-right',
        autoClose: 2000,
        theme: "colored"

    });
    setFormData({
    addressType: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    mobileNumber: "",
    landmark: "",   
    });
     
    console.log(formData);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value,
  });
};
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
            </li><hr />
            <li className="item">
              <img src={Img2} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" href="#">
                Wishlist
              </a>
            </li><hr />
            <li className="item">
              <img src={Img3} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" href="#">
                Addresses
              </a>
            </li><hr />
            <li className="item">
              <img src={Img4} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" href="#">
                Profile Info
              </a>
            </li><hr />
            <li className="item">
              <img src={Img5} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" href="#">
                Logout
              </a>
            </li><hr />
          </ul>
        </div>
        <form className="Address_form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Address Type</label>
            <input className='label-wid' type="text" name="addressType" value={formData.addressType}
                                onChange={handleInputChange} />
            <p>Eg: Office Address, Home Address Etc</p>
          </div>
          <div className="form-group">
            <div className='labelMain'>
              <div className='labelName'>
            <label >First Name</label>
            <input  type="text" name="firstName" value={formData.firstName}
                                        onChange={handleInputChange} />
              </div>
              <div className='labelName'>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName}
                                        onChange={handleInputChange}/>
            </div>
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className='label-wid' type="email" name="email" value={formData.email}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input className='label-wid' type="text" name="company" value={formData.company}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Address 1</label>
            <input className='label-wid' type="text" name="address1"  value={formData.address1}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input className='label-wid' type="text" name="address2" value={formData.address2}
                                onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Country</label>
            <input className='label-wid' type="text" name="country"  value={formData.country}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>State</label>
            <input className='label-wid' type="text" name="state"   value={formData.state}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
        <div className='labelMain'>
        <div className='labelName'>
            <label>City/Town</label>
            <input type="text" name="city"  value={formData.city}
                                        onChange={handleInputChange} />
            </div>
            <div className='labelName'>
            <label>ZIP/Postcode</label>
            <input type="text" name="postalCode"         value={formData.postalCode}
                                onChange={handleInputChange} />
            </div>
        </div>
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input className='label-wid' type="text" name="mobileNumber" value={formData.mobileNumber}
                                onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Alternate Mobile Number</label>
            <input className='label-wid' type="text" name="alternateMobile" />
          </div>
          <div className="form-group">
            <label>Landmark</label>
            <input type="text"   name="landmark"
                                value={formData.landmark}
                                onChange={handleInputChange} />
          </div>
          <button type="submit">Save Address</button>
        </form>
      </div>
    )
}
export default Sidebar;