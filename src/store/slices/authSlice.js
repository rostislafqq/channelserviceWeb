import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.isAuth = true;
    },
    removeUserAuth: (state) => {
      state.isAuth = false;
    },
  },
});

export const { removeUserAuth, setIsAuth } = counterSlice.actions;

export default counterSlice.reducer;
