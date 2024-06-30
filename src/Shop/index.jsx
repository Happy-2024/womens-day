import React from 'react'
import { useState } from 'react';
import Navbar from '../Home/Navbar';
import Banner from '../Shop/Banner';
import Faa from '../Shop/Faa';
import Footer from '../Home/Footer';
import BestSeller from '../Home/BestSeller.jsx';
import Periodcare from '../Home/Periodcare.jsx';
import Hskincare from '../Home/Hskincare.jsx';
import Hcaretwins from '../Home/Hcaretwins.jsx';

const Shop = ({}) => {
  const [shopItem,setShopItem] = useState('hairSkin')

  return (
    <div>
      <Navbar /> 
      <Banner setShopItem={setShopItem} />
      {shopItem == 'bestSeller' &&
      <BestSeller/>
      }
        {shopItem == 'period' &&
      <Periodcare/>
      }
        {shopItem == 'hairSkin' &&
      <Hskincare/>
      }
        {shopItem == 'health' &&
      <Hcaretwins/>
      }
      <Faa />
      <Footer /> 
    </div>
  );
}

export default Shop;