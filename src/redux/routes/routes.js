import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import RecetarioPage from '../../pages/Recetario/recetarioPage';
import Slider from '../../components/Hero/Slider';
import Categories from '../../components/Categories/Categories';
import AllProductsCards from '../../components/Products/AllProductsCards';
import Checkout from '../../pages/Checkout/Checkout';
import Login from "../../pages/Login/Login"
import Register from '../../pages/Register/Register';
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import Ordenes from "../../pages/Ordenes/Ordenes";
import Felicitaciones from "../../pages/Felicitaciones/Felicitaciones";
import Contact from '../../components/Contact/Contact';
function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/recetas" element={<RecetarioPage />} />
      <Route path='/register' element={<Register />} />
      
      <Route
        path='/checkout'
        element={
          <ProtectedRoute redirectTo='/login'>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/ordenes' element={<Ordenes />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />


    </ReactDomRoutes>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <AllProductsCards />
      <Contact/>
    </>
  );
}

export default Routes;

