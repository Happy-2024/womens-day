import React from 'react';
// import './App.css';  // Import the CSS file
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Card from './Card.jsx';
import Dtimer from './Dtimer.jsx';
import Doffer from './Doffer.jsx';
import BestSeller from './BestSeller.jsx';
import Periodcare from './Periodcare.jsx';
import Hskincare from './Hskincare.jsx';
import Hcaretwins from './Hcaretwins.jsx';
import Dspec from './Dspec.jsx'
import Yreviews from './Yreviews.jsx';
import Oblogs from './Oblogs.jsx';
import Insta from './Insta.jsx';
import Footer from './Footer.jsx'; 
const Home = () =>{
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
      <Dtimer/>
      <Doffer />
      <BestSeller /> 
      <Periodcare />
      <Hskincare />
      <Hcaretwins />
      <Dspec /> 
      <Yreviews />
      <Oblogs />
      <Insta />
      <Footer/>
    </div>
  );
};
export default Home;