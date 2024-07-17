
import React from 'react';
import { Banner } from './component/banner';
import {Navbar} from "./component/Navbar"
import Myhero from './component/Myhero';
import { LogoTicker } from './component/LogoTicker';
import {Features} from './component/Features';
import { ProductShowcase } from './component/ProductShowcase';


 const Home = () => {
 return (
 <>
      <Banner/>
      <Navbar/>
      <Myhero/>
      <LogoTicker/>
      <Features/>
      <ProductShowcase/>
</>  

);
}; 
export default Home;



