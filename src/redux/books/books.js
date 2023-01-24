import { createReducer } from '@reduxjs/toolkit';

import { fetchBooks, postANewBook, removeBook } from './bookActions';

const initialState = {
  books: [
    // {
    //   id: '1',
    //   title: 'The Hunger Games',
    //   author: 'Suzanne Collins',
    //   category: 'Action',
    // },
    // {
    //   id: '2',
    //   title: 'Dune',
    //   author: 'Frank Herbert',
    //   category: 'Science Fiction',
    // },
    // {
    //   id: '3',
    //   title: 'Capital in the Twenty-First Century',
    //   author: 'Suzanne Collins',
    //   category: 'Economy',
    // },
  ],
};

const booksReducer = createReducer(initialState, (builder) => {
  // builder.addCase(addBook, (state, action) => {
  //   const updatedState = {
  //     ...state,
  //     books: [
  //       ...state.books,
  //       { ...action.payload, id: `${state.books.length + 1}` },
  //     ],
  //   };
  //   return updatedState;
  // });

  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const updatedState = {
      ...state,
      books: [...action.payload],
    };
    return updatedState;
  });

  builder.addCase(removeBook, (state, action) => {
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
