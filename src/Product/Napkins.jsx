import React from 'react';
import './Napkins.css'; // Assuming you have custom styles in Napkins.css
import Img1 from '../assets/images/n1.png';
import Img2 from'../assets/images/n2.png';
import Img3 from '../assets/images/n3.png';
import Img4 from '../assets/images/n4.png';

const Napkins = () => {
  return (
    <div>
          <h3 className='text-center'>Benefits of Napkins</h3>
          <div className='parent mt-3'>
          <div className='Box-1'>
            <img className="img1"src={Img1} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
          <div className='Box-2'>
          <img className="img1"src={Img2} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
          <div className='Box-3'>
          <img className="img1"src={Img3} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
        </div>
          <div className='parent mt-3'>
          <div className='Box-1'>
            <img className="img1"src={Img4} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
          <div className='Box-2'>
          <img className="img1"src={Img4} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
          <div className='Box-3'>
          <img className="img1"src={Img4} alt="" srcset="" />
            <p className='pc'>Period Care Napkins</p>
            <p className='pcc'>Stimulates free moving</p>
            <p className='pccc'>Napkins are good absorbable and Easy wearable with Low cost.</p>
          </div>
        </div>
    </div>
  );
};

export default Napkins;
