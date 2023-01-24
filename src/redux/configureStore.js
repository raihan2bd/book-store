import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import uiSlice from './ui/uiSlice';

const store = configureStore({
  reducer: { books: booksReducer, categories: categoriesReducer, ui: uiSlice },
});

export default store;
