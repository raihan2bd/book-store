import { createReducer, createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('book/remove');

const initialState = {
  books: [],
};

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_BOOK, (state, action) => {
    state.books.push(action.payload);
  });
  builder.addCase(REMOVE_BOOK, (state, action) => {
    state.books.filter((book) => book.id !== action.payload);
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
