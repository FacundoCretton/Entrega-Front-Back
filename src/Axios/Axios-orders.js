import axios from 'axios';
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStart,
  fetchOrdersSuccess,
} from '../redux/order/orderSlice';
import { BASE_URL } from '../utils/constants';

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStart());

  try {
    const orders = await axios.get(`${BASE_URL}orders`, {
      headers: {
        'x-token': currentUser.token,
      },
    });
    console.log(orders);
    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);

    dispatch(
      fetchOrdersFail('Ocurrio un problema y no se pudo procesar la solicitud')
    );
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  const token = currentUser.token;

  console.log(token);
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: {
        'x-token':token,
      },
    });
    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    console.log(error);
    dispatch(createOrderFail());
  }
};
