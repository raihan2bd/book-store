/* eslint consistent-return: "error" */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { uiActions } from '../ui/uiSlice';

export const fetchBooks = createAsyncThunk(
  'book/fetch_books',
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(uiActions.pendingModal());
      const response = await axios.get();
      if (response.status !== 200) {
        throw Error('Something went wrong!!');
      }
      const data = { ...response.data };
      if (!data) {
        throw Error('No Data found!');
      }
      const booksArr = [];
      Object.keys(data).forEach((key) => {
        booksArr.push({
          id: key,
          title: data[key][0].title,
          author: data[key][0].author,
          category: data[key][0].category,
        });
      });

      thunkAPI.dispatch(uiActions.closeModal());
      return booksArr || [];
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to create the book!!'),
      );
    }
    return null;
  },
);

export const postANewBook = createAsyncThunk(
  'books/post_a_new_book',
  async (book, thunkAPI) => {
    try {
      const bookData = {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      };
      thunkAPI.dispatch(uiActions.pendingModal());
      const response = await axios.post('', { ...bookData });
      if (response.status === 201) {
        thunkAPI.dispatch(
          uiActions.successModal('Book is successfully created!!'),
        );
        return bookData;
      }
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to create the book!!'),
      );
    }

    return null;
  },
);

export const removeBook = createAsyncThunk(
  'book/remove',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(uiActions.pendingModal());
      const response = await axios.delete(`/${id}`);
      if (response.status !== 201) {
        throw Error('Failed to delete the book!!');
      }
      thunkAPI.dispatch(uiActions.successModal(response.data));
      return id;
    } catch (err) {
      thunkAPI.dispatch(
        uiActions.rejectModal(err.message || 'Failed to delete the book!!'),
      );
    }
    return null;
  },
);
