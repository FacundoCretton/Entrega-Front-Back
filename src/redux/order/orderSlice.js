import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  orders: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: INITIAL_STATE,
  reducers: {
    createOrderFail: (state = INITIAL_STATE, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    fetchOrderSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    },
    fetchOrderFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    fetchOrderStart: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    clearError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    clearOrder: (state) => {
      return {
        ...state,
        orders: null,
      };
    },
  },
});

export const {
  createOrderFail,
  fetchOrderSuccess,
  fetchOrderFail,
  fetchOrderStart,
  clearError,
  clearOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
