import { configureStore } from '@reduxjs/toolkit';
import cards from './slices/cardsSlice';
import auth from './slices/authSlice';
export default configureStore({
  reducer: {
    cards,
    auth,
  },
});
