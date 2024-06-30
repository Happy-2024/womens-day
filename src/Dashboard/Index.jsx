import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
const Dashboard=({})=>
    {
      // const iTrue = sessionStorage.getItem('iTrue')
      // console.log(iTrue,'iTrue')

const [isTrue,setIsTrue] =useState(sessionStorage.getItem('iTrue') ? 'wishList' : 'myOrder')
console.log(isTrue,'isTrue')
return(
    <>
      <Navbar/>
      <Sidebar setIsTrue={setIsTrue} isTrue={isTrue}/>
      <Footer/>
   
    </>
  
  );
    };
export default Dashboard;