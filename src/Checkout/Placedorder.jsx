import React from 'react'
import Navabar from'../Home/Navbar'
import './Placeorder.css'
import Img1 from '../assets/images/gheart.png'
import Footer from '../Home/Footer'
import { useNavigate } from 'react-router'

const Placedorder = () => {
  const navigate=useNavigate()
  const dashboard =()=>{
    sessionStorage.setItem('iTrue',false)
    navigate('/dashboard')
  }
  
  return (
    <>
        <Navabar/>
        <div className="order-confirmation">
          <img src={Img1} alt="" className='Gheart'/>
      <div className="order-message">
        <h1>Order Placed !!!</h1>
        <p>Your order <span className="order-number">#965471202</span> has been placed. Your order details are shown for your personal account.</p>
        <button className="dashboard-button" onClick={dashboard}>Go to Dashboard</button>
      </div>
    </div>
      <Footer/>
    </> 
  )
}

export default Placedorder