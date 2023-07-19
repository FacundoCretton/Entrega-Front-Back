import { useNavigate } from 'react-router-dom';
import OrderStatus from '../UI/OrderStatus/OrderStatus';
import { formatDate } from '../../utils/formatDate';
import {formatPrice} from "../../utils/formatPrice"

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardOrdenesStyles';

const CardOrdenes = ({createdAt, status, total, _id}) => {

  const navigate = useNavigate();

  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: {_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createdAt)}hs</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

export default CardOrdenes;
