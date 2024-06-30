import React from 'react'
import'./List.css'
import Img1 from '../assets/images/l.png'

const List = () => {
  return (
    <>
    <div className='Ban mt-3'>
             <h2 className='mt-5'>Why you would love our Period Care Napkins</h2>
             <div className='lists '>   
                <img src={Img1}alt="" srcset="" />
             <ul>
                    <li className='w-100'><span className='number'>01:</span>Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.</li>
                    <li><span className='number'>02:</span> It can also be used as a pre-wash haircare product to help improve the quality of hair.</li>
                    <li><span className='number'>03:</span> Our onion oil is made with 100% pure cold pressed oils.</li>
                    <li><span className='number'>04:</span> 100% free of hexane, mineral oil, and silicone for holistic hair care.</li>
                    </ul>
             </div>
        </div>
        <h3 className='text-center mt-3'>Disclaimer</h3>
        <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </>
  )
}
export default List