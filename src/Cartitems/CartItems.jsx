import React, { useState, useEffect } from 'react';
import './CartItems.css';
import X from '../assets/images/x.png';
import Downleft from '../assets/images/down-left.png';
import { useNavigate, useParams } from 'react-router';
import Img1 from '../assets/images/bs3.png';
import Img2 from '../assets/images/bss1.png';
import Img3 from '../assets/images/bss2.png';
import Img4 from '../assets/images/bss3.png';



const App = () => {
  const items = JSON.parse(sessionStorage.getItem('oneItem'));

const arrayobject = [
  { id: 1, name: "Half Running Set", price: 119.00, photo: items.photo },
  { id: 2, name: "Half Running Set", price: 119.00, photo: items.photo },
  { id: 3, name: "Half Running Set", price: 119.00, photo: items.photo },
  { id: 4, name: "Half Running Set", price: 119.00, photo: items.photo },
];
  const navigate = useNavigate();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
console.log(quantity)

  const checkout = () => {
    navigate(`/checkout/${params.id}`);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  useEffect(() => {
    const item = arrayobject.find(item => item.id.toString() === params.id);
    setSelectedItem(item);

    if (item) {
      const amount = item.price * quantity;
      setTotalAmount(amount);
      sessionStorage.setItem('selectedItem', JSON.stringify(item));
      sessionStorage.setItem('totalAmount', amount.toString());
      sessionStorage.setItem('quantity', quantity.toString());

    }
  }, [params.id, quantity]);
console.log(items,'itdddddddems')
  return (
    <>
      <h3 className='text-center mt-5'>
        Your Cart Items 
      </h3>
      <div className="container-c">
        <div className="cart">
          {selectedItem && (
            <div className="cart-item" key={selectedItem.id}>
              <img src={selectedItem.photo} alt={selectedItem.name} className="product-image" />
              <div className="product-details">
                <h3>{selectedItem.name}</h3>
                <p><b>₹ {selectedItem.price.toFixed(2)}</b></p>
                <input
                  type="number"
                  className="quantity-input"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button className="remove-btn">
                  <img src={X} alt="Remove" />
                </button>
              </div>
              <div className="item-price">₹ {totalAmount.toFixed(2)}</div>
            </div>
          )}
          <button className="update-cart-btn">Update Cart</button>
        </div>
        <div className="cart-summary">
          <div className="item-list d-flex flex-row justify-content-between">
            <p>{selectedItem ? selectedItem.name : "Womens Period Care Napkins"}</p>
            <p className="item-price">₹ {totalAmount.toFixed(2)}</p>
          </div>
          <br /><br />
          <div className="total">
            <span className="total-items"><b>TOTAL</b></span>
            <span className="total-price">₹ {totalAmount.toFixed(2)}</span>
          </div>
          <button className="checkout-button" onClick={checkout}>Proceed to Checkout</button>
          <a href={`/product/${params.id}`} className="continue-shopping">
            <img src={Downleft} alt="Continue Shopping" />Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
