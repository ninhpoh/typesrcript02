import { configureStore } from '@reduxjs/toolkit';
import librarySlice from '../slices/librarySlice';

const store = configureStore({
  reducer: {
    books: librarySlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;