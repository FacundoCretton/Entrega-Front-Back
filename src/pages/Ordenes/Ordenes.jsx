import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"

import Button from '../../components/UI/Button/Button';
import CardsOrdenes from '../../components/Ordenes/CardsOrdenes'

import {
  OrdenesBtnContainerStyled,
  OrdenesContainerStyled,
  OrdenesPatternStyled,
  OrdenesTitleStyled,
} from './OrdenesStyles';
import { getOrders } from '../../Axios/Axios.orders';
import { clearError, fetchOrderFail } from '../../redux/order/orderSlice';

const Ordenes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser)
  const {orders, error} = useSelector(state => state.orders);

  useEffect(() => {
    if(!orders) {
      getOrders(dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrderFail())
    } else {
      error && dispatch(clearError())
    }
  }, [currentUser, orders, error, dispatch])

  return (
    <>
      <OrdenesContainerStyled>
        <OrdenesTitleStyled>Mis órdenes</OrdenesTitleStyled>
        <CardsOrdenes />
        <OrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </OrdenesBtnContainerStyled>
      </OrdenesContainerStyled>
      <OrdenesPatternStyled
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
        alt=''
      />
    </>
  );
};

export default Ordenes;
