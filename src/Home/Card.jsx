import React from "react";
import Img1 from '../assets/images/b1.png';
import Img2 from '../assets/images/b2.png';
import Img3 from '../assets/images/b3.png';
import Arrow from '../assets/images/arrow.png';
import './card.css'


const Card=()=>
    {
        return(
            <section className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="position-relative">
              <img src={Img1} alt="project" width="440px" height="272px" className="w-100 h-100" />
              <div className="position-absolute top-0 left-0 card_inner d-flex flex-column justify-content-center align-items-start">
                <h3 className="mt-4">Period Care</h3>
                <p>8685 Items</p>
                <button>Browse Items <img src={Arrow} alt="" /></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="position-relative">
              <img src={Img2} alt="project" width="440px" height="272px" className="w-100 h-100" />
              <div className="position-absolute top-0 left-0 card_inner d-flex flex-column justify-content-center align-items-start">
                <h3 ClassName="mt-4">Skin Care</h3>
                <p>8685 Items</p>
                <button>Browse Items <img src={Arrow} alt="" /></button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="position-relative">
              <img src={Img3} alt="project" width="440px" height="272px" className="w-100 h-100" />
              <div className="position-absolute top-0 left-0 card_inner d-flex flex-column justify-content-center align-items-start">
                <h3 className="mt-4">Health Care</h3>
                <p>32 Items</p>
                <button>Browse Items <img src={Arrow} alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        );
    };

export default Card;