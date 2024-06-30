import React from 'react';
import'./Footer.css';
import Img1 from '../assets/images/logo.png'; 
import Img2 from '../assets/images/facebook.png'; 
import Img3 from '../assets/images/twitter.png'; 
import Img4 from '../assets/images/youtube.png'; 
import Img6 from '../assets/images/instagram.png'; 
import Img7 from '../assets/images/linkedin.png'; 
import Img8 from '../assets/images/card.png'; 

const Footer =()=>{

    return (
        <footer>
          <div className="footer-container">
            <div className="footer-section company-info">
              <div className='d-flex flex-row'>
              <img src={Img1} alt="Womens Dayz Logo" className="w-20" />&nbsp;&nbsp; 
              <p className="wd">Women Dayz</p>
              </div>
              <p className="fol">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Freedom of life</p>
              <br /><br />
              <p>No: 15, Krishna Kandha Building,<br />SA Garden, Saravanampatti,<br />Coimbatore, Tamil Nadu 641026</p>
              <p>1-202-555-0106<br /><a href="mailto:help@shopper.com">help@shopper.com</a></p>
              <div className="d-flex flex-row">
                <a href="#"><img src={Img2} alt="Facebook" /></a>
                <a href="#"><img src={Img3} alt="Twitter" className="mx-2" /></a>
                <a href="#"><img src={Img4} alt="Instagram" className="mx-2" /></a>
                <a href="#"><img src={Img6} alt="YouTube" className="mx-2" /></a>
                <a href="#"><img src={Img7} alt="LinkedIn" /></a>
              </div>
            </div>
            <div className="footer-section supports">
              <h3>SUPPORTS</h3>
              <a href="#">Contact Us</a>
              <a href="#">About Us</a>
              <a href="#">Size Guide</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-section shop">
              <h3>SHOP</h3>
              <a href="#">Men's Shopping</a>
              <a href="#">Women's Shopping</a>
              <a href="#">Kid's Shopping</a>
              <a href="#">Furniture</a>
              <a href="#">Discounts</a>
            </div>
            <div className="footer-section company">
              <h3>COMPANY</h3>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Affiliate</a>
              <a href="#">Login</a>
            </div>
            <div className="footer-section">
              <h3>SECURE PAYMENTS</h3>
              <img src={Img8} alt="card" />
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Women's Dayz. All Rights Reserved.</p>
          </div>
        </footer>
      );
    };
export default Footer;

