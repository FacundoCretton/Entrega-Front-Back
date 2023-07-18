import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import RecetarioPage from '../../pages/Recetario/recetarioPage';
import Slider from '../../components/Hero/Slider';
import Categories from '../../components/Categories/Categories';
import AllProductsCards from '../../components/Products/AllProductsCards';
import Checkout from '../../pages/Checkout/Checkout';
import Login from "../../pages/Login/Login"
import Register from '../../pages/Register/Register';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />

      <Route path="/recetas" element={<RecetarioPage />} />
      <Route path='/checkout'element={<Checkout />}/>
      <Route path='/login'element={<Login />}/>
      <Route path='/register' element = {<Register/>}/>

    </ReactDomRoutes>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <AllProductsCards />
    </>
  );
}


export default Routes;
