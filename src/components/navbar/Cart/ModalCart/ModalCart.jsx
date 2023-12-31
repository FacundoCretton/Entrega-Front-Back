import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../../utils/formatPrice';

import Submit from '../../../UI/Submit/Submit';
import Increase from '../../../UI/Incrense/Incrense';
import ModalCardCart from './ModalCardCart';
import {useDispatch, useSelector} from 'react-redux'
import {clearCart, toggleCartHidden} from '../../../../redux/cart/cartSlide'

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../../navbarStyles';

const ModalCart = () => {
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  // Obtiene el estado actual del usuario (verificado o no)
  const currentUser = useSelector((state) => state.user.currentUser);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  const formattedShippingCost =
    totalPrice > 2000 ? 'Gratis en compras superiores a $2000' : formatPrice(shippingCost);

  const handleStartOrder = () => {
    if (currentUser && currentUser.verified) {
      // El usuario está verificado, permite el proceso de pedido
      navigate('/checkout');
      dispatch(toggleCartHidden());
    } else {
      // El usuario no está verificado, redirige a la página de verificación
      navigate('/verify', { state: { showVerificationMessage: true } });    }
  };

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleCartHidden())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleCartHidden())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={() => dispatch(clearCart())}
                  bgColor='blue'
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => {
                    return <ModalCardCart {...item} key={item.id} />;
                  })
                ) : (
                  <p>No hay nada por aquí</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formattedShippingCost}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  onClick={handleStartOrder} // Utiliza la función para la verificación del usuario
                  disabled={!cartItems.length}
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;