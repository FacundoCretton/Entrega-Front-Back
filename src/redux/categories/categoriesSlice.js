import { createSlice } from '@reduxjs/toolkit';
import { categorias } from '../../components/data/categories';

const INITIAL_STATE = {
  categories: categorias,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
      getCategories: (state) => {
        return state;
      },
      selectCategory: (state, action) => {
        return {
          ...state,
          selectedCategory: action.payload,
        };
      },
    },
  });
   

export const { getCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
