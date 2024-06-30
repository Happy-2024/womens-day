import React from 'react';
import Navbar from '../Home/Navbar';
import Periodcare from './Periodcare';
import Ai from '../Product/Ai';
import Napkins from './Napkins';
import Key from './/Key'
import List from './List'
import Rproduct from'./Rproduct'
import Rend from'./Rend'
import Footer from '../Home/Footer'



const Page = () => {
  return (
    <div>
        <Navbar />
        <Periodcare />
        <Ai/>
        <Napkins/>
        <Key/>
        <List/>
        <Rproduct/>
        <Rend/>
        <Footer/>
    </div>
  );
};

export default Page;
