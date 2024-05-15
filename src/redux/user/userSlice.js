import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
};

const userSlice = createSlice({
  name: 'user',

  initialState: INITIAL_STATE,
 
  reducers: {
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    toggleMenuHidden: (state) => {
      return {
        ...state,
        hiddenMenu: !state.hiddenMenu,
      };
 
 
    },
    setVerify: (state, action) => {
      console.log("Llamando a setVerify");
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          verified: action.payload,
        },
      };
    },
  },});

export const { setCurrentUser, toggleMenuHidden, setVerify } = userSlice.actions;

export default userSlice.reducer;
