import { useSelector } from 'react-redux';
import CardOrdenes from './CardOrdenes';
import { OrdenesContainerStyled } from './CardOrdenesStyles';

import Loader from "../UI/Loader/Loader";

const CardsOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders);

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />
  };

  if (error) {
    return <h2 style={{ textAlign: 'center' }} > {error} </h2>
  }

  return (
    <OrdenesContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <CardOrdenes {...order} key={order._id} />
          })
        ) : (
          <h2>Que esperás para hacer tu primer pedido?</h2>
        )
      }
     
    </OrdenesContainerStyled>
  );
};

export default CardsOrdenes;
