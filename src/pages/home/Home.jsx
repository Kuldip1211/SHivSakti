// src/pages/Cart/Cart.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from "../../components/Header/header";
import Expolrmenu from "../../components/Explormenu/Expolrmenu";
import FoodDisply from '../../components/Foodfisplay/FoodDisply';
import AppDownlod from '../../components/AppDownlod/AppDownlod';
function Home() {

 const[category,setCategory] = useState("All")

 return (

  <div>
   <Header />
   <Expolrmenu  category={category} setCategory={setCategory}/>
   <FoodDisply category={category} />
   <AppDownlod />
  </div>
 );
}

export default Home;
