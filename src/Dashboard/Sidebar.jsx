import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Sidebar.css'; // Import custom sidebar styles
import Img1 from '../assets/images/D1.png';
import Img2 from '../assets/images/D2.png';
import Img3 from '../assets/images/D3.png';
import Img4 from '../assets/images/D4.png';
import Img5 from '../assets/images/D5.png';
import Dl from '../assets/images/dl.png';
import Wishlist from '../Dashboard/Wishlist'
import { useNavigate } from 'react-router';
import xr from '../assets/images/xred.png'
import { useDispatch } from "react-redux";
import { AddToaddress } from "../Redux/actions/AddressAction";
import { toast } from 'react-toastify';

const Sidebar = ({setIsTrue, isTrue}) => {
const navigate = useNavigate()
const [addTrue,setAddTrue] = useState(false)
const [submitTrue,setSubmitTrue] = useState(false)
const selectedItemValue =JSON.parse(sessionStorage.getItem('selectedItem'));
const totalAmount =sessionStorage.getItem('totalAmount')
const currentDate = new Date();

const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

console.log(`${formattedDate} ${formattedTime}`); // Outputs something like: 06/29/2024 12:34:56 PM

const dispatch = useDispatch();
const [close,setClose]=useState(false)
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

  setSubmitTrue(true)
};

const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({
    ...formData,
    [name]: value,
});
};
    const handleChange = (key) => {
        setIsTrue(key)
        setSubmitTrue(false)
  setClose(false)
    }
    const handleAddChange = (key) => {
        setAddTrue(true)
        setIsTrue('')
  setSubmitTrue(false)
  setClose(false)

    }

    const handleGo = () => {
        navigate('/login')
    }

    const handleClose = () => {
      setClose(true)
  }
  
console.log(selectedItemValue,'eeeeeeeeeeeeee')
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
                    <li className="item" onClick={()=>handleChange('myOrder')}>
                        <img src={Img1} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="link" href="#">
                            My Orders
                        </a>
                    </li><hr/>
                    <li className="item" onClick={()=>handleChange('wishList')}>
                        <img src={Img2} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="link" href="#">
                            Wishlist
                        </a>
                    </li><hr/>
                    <li className="item" onClick={()=>handleChange('Address')}>
                        <img src={Img3} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="link" href="#">
                            Addresses
                        </a>
                    </li><hr/>
                    <li className="item" onClick={()=>handleChange('profileInfo')}>
                        <img src={Img4} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="link" href="#">
                            Profile Info
                        </a>
                    </li><hr/>
                    <li className="item" onClick={()=>handleGo()}>
                        <img src={Img5} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="link" href="#">
                            Logout
                        </a>
                    </li><hr/>
                </ul>
            </div>
            {isTrue == 'myOrder' &&
            <div className="orders">
                    <div className="order-item">
                        <div className="order-header">
                            <div className="order-number">Order Number {selectedItemValue.id}</div>
                            <div className='order-status'></div>
                            <div className="order-date">Ordered Date & Time: {formattedDate} {formattedTime}</div>
                        </div><hr/>
                        <div className="order-body">
                                <div className="order-product">
                                    <img src={selectedItemValue.photo} alt="" />
                                    <div>
                                        <h6>Womens Period Care Napkins</h6>
                                        <p><b>Size:XXL</b></p>
                                        <p><b>₹ {selectedItemValue.price}</b></p>
                                    </div>
                                </div>
        
                            <div className="order-coupon">Coupon code:  Applied 200 Discount!!!</div>
                            <div className="order-total">Total: ₹ {totalAmount}</div>
                        </div>
                    </div>
            </div>}

            {isTrue == 'wishList' && 
            <div>
                <Wishlist/></div>}

{isTrue == 'Address' && 
           <div className='Address'>
           {!close &&
           <div className='Home-Address'>
               <div className='icon'>
                   <h4>Home Address </h4>
                   <img src={xr} alt="close"  onClick={handleClose}/>
               </div>    <hr />
               <p style={{fontSize:'20px'}}>
                    {formData.firstName} {formData.lastName}
               </p>
               <p style={{
fontFamily: 'Jost',
fontSize: '16px',
fontWeight: 400,
lineHeight: "23.12px",
// text-align: left,

}}>
{formData.address1}
{formData.address2}
               </p>
               <p>
                   Email: {formData.email}
               </p>
               <p>
                   Mobile: {formData.mobileNumber}
               </p>
           </div>
}
      
       <div style={{ flexDirection: 'column', marginTop:'50px' }}>
           <button className='btn-Address' onClick={()=>handleAddChange()}>
               + Add New Address
           </button>
       </div>
   </div>}

   {submitTrue && 
           <div className='Address'>
            {!close &&
           <div className='Home-Address'>
               <div className='icon'>
                   <h4>Home Address </h4>
                   <img src={xr} alt="close"  onClick={handleClose}/>
               </div>    <hr />
               <p style={{fontSize:'20px'}}>
                    {formData.firstName} {formData.lastName}
               </p>
               <p style={{
fontFamily: 'Jost',
fontSize: '16px',
fontWeight: 400,
lineHeight: "23.12px",
// text-align: left,

}}>
{formData.address1}
{formData.address2}
               </p>
               <p>
                   Email: {formData.email}
               </p>
               <p>
                   Mobile: {formData.mobileNumber}
               </p>
           </div>
}
      
       <div style={{ flexDirection: 'column', marginTop:'50px' }}>
           <button className='btn-Address' onClick={()=>handleAddChange()}>
               + Add New Address
           </button>
       </div>
   </div>}

{isTrue == 'profileInfo' && 
            <div className='profileInfo-div'>
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
          <button type="submit" >Update Profile </button>
          </div>   
          </div>   
            }

            {addTrue && isTrue == ''  && !submitTrue &&
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
             <button type="submit" >Save Address</button>
           </form>}
        </div>
    );
};

export default Sidebar;
