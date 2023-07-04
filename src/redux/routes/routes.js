import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import RecetarioPage from '../../pages/Recetario/recetarioPage';
import Slider from '../../components/Hero/Slider';
import Categories from '../../components/Categories/Categories';
import AllProductsCards from '../../components/Products/AllProductsCards';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />

      <Route path="/recetas" element={<RecetarioPage />} />
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
