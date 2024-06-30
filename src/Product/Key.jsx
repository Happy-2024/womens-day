import React from 'react'
import './Key.css'
import Img1 from'../assets/images/k1.png'
import Img2 from'../assets/images/k2.png'
import Img3 from'../assets/images/k3.png'
import Img4 from'../assets/images/k4.png'

const Key = () => {
  return (
    <div>
        <h3 className='text-center mt-4'>Key Ingredients</h3>
        <div className='parents mt-3'>
        <div className='BOX-1'>
            <img src={Img1} alt="" srcset="" />
            <p className='K_one'>Easy Absorbable</p>
            <p className='K_two'> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
            </div>
        <div className='BOX-1'>
            <img src={Img2} alt="" srcset="" />
            <p className='K_one'>Long Time Holding</p>
            <p className='K_two'>  It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp..</p>
            </div>
        </div>
        <div className='parents mt-3'>
        <div className='BOX-1'>
            <img src={Img3} alt="" srcset="" />
            <p className='K_one'>Made Of Cotton Wool</p>
            <p className='K_two'> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
            </div>
        <div className='BOX-1'>
            <img src={Img4} alt="" srcset="" />
            <p className='K_one'>Easy Wearable</p>
            <p className='K_two'>  It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp..</p>
            </div>
        </div>
    </div>
  )
}

export default Key;