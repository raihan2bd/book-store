import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';

const store = configureStore({
  reducer: booksReducer,
});

export default store;
