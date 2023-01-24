import { createReducer } from '@reduxjs/toolkit';

import { fetchBooks, postANewBook, removeBook } from './bookActions';

const initialState = {
  books: [],
};

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const updatedState = {
      ...state,
      books: [...action.payload],
    };
    return updatedState;
  });

  builder.addCase(removeBook.fulfilled, (state, action) => {
    const updatedBooks = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBooks };
  });

  builder.addCase(postANewBook.fulfilled, (state, { payload }) => {
    const book = {
      id: payload.item_id,
      title: payload.title,
      author: payload.author,
      category: payload.category,
    };
    const updatedState = { ...state, books: [...state.books, { ...book }] };
    return updatedState;
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
