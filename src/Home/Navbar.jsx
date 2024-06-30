import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/images/logo.png';
import Icon1 from '../assets/images/icon1.png';
import Icon2 from '../assets/images/icon2.png';
import Icon3 from '../assets/images/icon3.png';
import Icon4 from '../assets/images/icon4.png';
import './Navbar.css'
import { useNavigate, useParams } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate()
  const count = sessionStorage.getItem('count')
  const selectId = JSON.parse(sessionStorage.getItem('selectedItem'))
  const goToCard = () => {
    if
    (selectId && selectId.id)
    {
      navigate(`/cartitem/${selectId.id}`)
    }else
    {
      console.warn('Selected item or id is null');
    }
   
  }
  const wishlist =()=>{
    sessionStorage.setItem('iTrue',true)
    navigate('/dashboard')
  }
  return (
    <nav className="navbar navbar-expand-sm bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="ms-1" src={logo} alt="logo" />&nbsp;&nbsp;&nbsp;
          <b>Womens Dayz<br/><p style={{color:'violet',fontSize:'12px',textAlign:'center'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Freedom of life</p></b>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"style={{fontFamily:'jost',fontWeight:'400'}} id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="/shop">Shop</a>
            </li>
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="#">Period Care</a>
            </li>
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="#">Hair Skin Care</a>
            </li>
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="#">Hair Care Twines</a>
            </li>
            <li className="nav-item me-5 mt-2">
              <a className="nav-link" href="login">Contact Us</a>
            </li>
          </ul>
          <div className='d-flex flex-row align-items-center'>
  <img className="me-5 mt-2" src={Icon1} alt="search icon" width="30" height="30" />
  <img className="me-5 mt-2" src={Icon2} alt="icon 2" width="30" height="30" />
  <div>
  </div>
  <div className='d-flex flex-row align-items-center'>
    <div className='position-relative' onClick={wishlist}>
      <img className="me-5 mt-2 circle" src={Icon3} alt="icon 3" width="30" height="30" />
      <div className="dot">{count}</div>
    </div>
    <div className='position-relative' onClick={goToCard}>
      <img className="me-5 mt-2" src={Icon4} alt="icon 4" width="30" height="30" />
      <div className="dot">0</div>
    </div>
  </div>
</div>
 </div>
      </div>
    </nav>
  );
};

export default Navbar;
