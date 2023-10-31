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
import Felicitaciones from "../../pages/Felicitaciones/Felicitaciones";
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';
import CardsRecommended from '../../components/Recommended/CardsRecommended';
import RecipeCard from '../../components/Recetario/RecipeCard';
import Verify from '../../pages/Validacion/verify';
import Ordenes from '../../pages/Ordenes/Ordenes'
function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/recetas" element={<RecetarioPage />} />
      <Route path="/recetas/:id" element={<RecipeCard />} />
      <Route path='/register' element={<Register />} />
      <Route path='/verify' element = {<Verify/>}/>
      <Route path='/orders' element={<Ordenes />} />
      
      <Route
        path='/checkout'
        element={
          <ProtectedRoute redirectTo='/login'>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/felicitaciones' element={<Felicitaciones />} />


    </ReactDomRoutes>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <CardsRecommended /> 
      <Categories />
      <AllProductsCards />
      <About />
      <Contact/>
    </>
  );
}

export default Routes;

