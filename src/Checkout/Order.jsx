// src/components/OrderForm.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './Order.css';
import Edit from'../assets/images/edit.png'
import Img1 from '../assets/images/bs1.png';
import Img2 from '../assets/images/bs2.png';
import Img3 from '../assets/images/bs3.png';
import Img4 from '../assets/images/bs4.png';


const OrderForm = () => {
const navigate = useNavigate()
const params = useParams();


  const placeOrder = () => {
    navigate('/order')
  }

  const arrayobject = [
    { id: 1, name: "Half Running Set", price: "119.00", photo: Img1 },
    { id: 2, name: "Half Running Set", price: "119.00", photo: Img2 },
    { id: 3, name: "Half Running Set", price: "119.00", photo: Img3 },
    { id: 4, name: "Half Running Set", price: "119.00", photo: Img4 }
  ];

  const totalAmount =sessionStorage.getItem('totalAmount')
  const quantity =sessionStorage.getItem('quantity')
  const deliveryCharge = 40
  const selectedItemValue =JSON.parse(sessionStorage.getItem('selectedItem'));

  const selectedItem = arrayobject.find(item => item.id.toString() === params.id);
  console.log(selectedItemValue.price,'selectedvalue')




const totalWithDelivery = parseInt(totalAmount) + parseInt(deliveryCharge);
  return (
    <div className="order-form">
      <div className="address-form">
        <h2>Billing & Shipping Details</h2>
        <div className="address-item">
          <input type="radio" name="address" checked />
          <div className="address-details">
            <p>Adam Wishnoi</p>
            <p>1354 Green Street Nashville Drive Dodge City, KS 67801 United States</p>
            <p>Email: admin@gmail.com</p>
            <p>Mobile: 9874563210</p>
          </div>
          <img src={Edit}alt=""/>
        </div>
        <div className="address-item">
          <input type="radio" name="address" />
          <div className="address-details">
            <p>Adam Wishnoi</p>
            <p>1354 Green Street Nashville Drive Dodge City, KS 67801 United States</p>
            <p>Email: admin@gmail.com</p>
            <p>Mobile: 9874563210</p>
          </div>
          <img src={Edit}alt=""/>
        </div>
        <button className="add- address"> + Add New Address</button>
      </div>

      <div className="order-summary">
        <h2>Order Items {quantity}</h2>
        {selectedItem && (
        <div className="order-item">
          <img src={selectedItem.photo} alt={selectedItem.name} />
          <div className="item-details">
            <p>Womens Period care Napkins</p>
            <label className='d-flex'>
              <h6>Size:&nbsp;</h6>
              <select>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl" selected>XXL</option>
              </select>
            </label><br/>
            <p>₹ :{totalAmount}</p>
          </div>
        </div>
        )}
        {/* <div className="order-item">
          <img src="https://via.placeholder.com/100" alt="Product" />
          <div className="item-details">
            <p>Womens Period care Napkins</p>
            <label className='d-flex'>
              <h6>Size:&nbsp;</h6>
              <select>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl" selected>XXL</option>
              </select>
            </label><br/>
            <p>₹ 119.00</p>
          </div>
        </div> */}
        <div className="coupon">
          <input type="text" placeholder="Enter Coupon Code" />
          <button className='btn'>Apply</button>
        </div>
        <div className="price-details">
          <p>Womens Period Care Napkins <span>₹ {totalAmount}</span></p>
          <p>Delivery Charges <span>₹ 40.00</span></p>
          <p>Total <span>₹ {Number(totalWithDelivery).toFixed(2)}</span></p>
        </div>
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I Accept Terms & Conditions</label>
        </div>
        <button className="place-order" onClick={placeOrder} >Place Order</button>
      </div>
    </div>
  );
};

export default OrderForm;

