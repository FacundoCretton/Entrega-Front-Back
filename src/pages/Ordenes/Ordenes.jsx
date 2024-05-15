import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import CardsOrdenes from '../../components/Ordenes/CardsOrdenes';

import {
  OrdenesContainerStyled,
  OrdenesTitleStyled,
  OrdenesSubtitleStyled,
  OrdenesContentStyled,
  OrdenesButtonContainerStyled,
} from './OrdenesStyles';
import { getOrders } from '../../Axios/Axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/order/orderSlice';

const Ordenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (!currentUser?.token) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      navigate('/login'); // Cambia '/login' por la ruta de inicio de sesión
    } else if (!orders) {
      getOrders(dispatch, currentUser);
    }
  }, [currentUser, orders, dispatch, navigate]);

  useEffect(() => {
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [currentUser, error, dispatch]);

  return (
    <OrdenesContainerStyled>
      <OrdenesTitleStyled>Mis Órdenes</OrdenesTitleStyled>
      <OrdenesSubtitleStyled>Revisa tus compras anteriores</OrdenesSubtitleStyled>
      <OrdenesContentStyled>
        <CardsOrdenes />
        <OrdenesButtonContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a la tienda</Button>
        </OrdenesButtonContainerStyled>
      </OrdenesContentStyled>
    </OrdenesContainerStyled>
  );
};

export default Ordenes;
