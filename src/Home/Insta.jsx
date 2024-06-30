import React from 'react';
import insta1 from '../assets/images/FI1.png';
import insta2  from '../assets/images/FI3.png';
import insta3  from '../assets/images/FI4.png';
import insta4  from '../assets/images/FI5.png';
import insta5  from '../assets/images/FI6.png';
import insta6  from '../assets/images/FI7.png';
import insta7  from '../assets/images/FI8.png';

const Insta = () => {
  return (
    <div>
      <div className="container mt-4 d-flex flex-row  flex-wrap">
          <img src={insta1} alt="Main" />
          <img src={insta2} alt="Main" />
          <img src={insta2} alt="Main" />
          <img src={insta3} alt="Main" />
          </div>
      <div className=" container d-flex flex-row flex-wrap">  
            <img src={insta4} alt="Main" />
            <img src={insta5} alt="Main" />
            <img src={insta6} alt="Main" />
           <img src={insta7} alt="Main" />
        </div>
    </div>
  ); 
}

export default Insta;



