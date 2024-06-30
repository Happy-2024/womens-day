import React, { useState } from 'react';
import '../Product/Periodcare.css';
import { useNavigate, useParams } from 'react-router-dom';
import Img1 from '../assets/images/p1.png';
import Img2 from '../assets/images/p2.png';
import Img3 from '../assets/images/bs11.png';
import Img4 from '../assets/images/bss2.png';
import Star1 from '../assets/images/star1.png';
import Star2 from '../assets/images/star2.png';
import delivery from'../assets/images/delivery.png';
import eye from'../assets/images/eye.png';
import Img5 from'../assets/images/shopping.png';
import Img6 from'../assets/images/heart.png';


const Product = () => {

  const items = JSON.parse(sessionStorage.getItem('oneItem'));
  const [size, setSize] = useState('XL');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()
const params = useParams()
  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const goToCard = (id, item) => {
    navigate(`/cartitem/${params?.id}`);
  };
  const goToWishList = (id, item) => {
    navigate(`/dashboard`);
  };

  const cartItems = (id) => {
    navigate(`/cartitem/${params?.id}`)
  }
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={items.photo} alt="Women's Period Care Napkins" />
      </div>
      <div className="product-details">
        <h1>Women's Period Care Napkins</h1>
        <p><img src={Star1} alt="" />&nbsp;
          <img src={Star1} alt="" />&nbsp;
          <img src={Star1} alt="" />&nbsp;
          <img src={Star1} alt="" />&nbsp;
          <img src={Star2} alt="" />&nbsp;
          (412 Reviews)</p>
        <div className='d-flex flex-row flex-wrap'>
          <p className='price'>₹ 119.00</p>&nbsp;&nbsp;
          <p className="stock">5 Left in Stock</p>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="delivery-info">
          <img src={delivery} alt="" srcset="" /> : Products are usually delivered in 3-7 days.</p>
        <p className="watching">
          <img src={eye} alt="" srcset="" /> : 46 watching this item.</p>

        <div className="size-selector">
          <label>Size: {size}</label><br /><br />
          {['S', 'M', 'L', 'XL', 'XXL'].map((s) => (
            <button
              key={s}
              className={size === s ? 'active' : ''}
              onClick={() => handleSizeChange(s)}
            >
              {s}
            </button>
          ))}
        </div><br />

        <div className="quantity-selector">
          <input type="number"
            style={{ width: '77px', height: '44px' }}
            value={quantity} onChange={handleQuantityChange} min="1" />
          <button className="add-to-cart"  onClick={() => goToCard()}>
            <img src={Img5} alt="shopping" />&nbsp;&nbsp;&nbsp;Add to Cart</button>
          <button className="wishlist" onClick={() => goToWishList()}>
            <img src={Img6} alt="" srcset="" ></img> &nbsp;&nbsp;&nbsp;Wishlist</button>
        </div><br />
        <button className="buy-now" onClick={(id)=>cartItems(id)}>
          <img src={Img5} alt="shopping" />&nbsp;&nbsp;&nbsp;Buy Now</button>
      </div>
    </div>
  );
};
export default Product;
