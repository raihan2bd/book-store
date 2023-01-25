import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from '../../redux/books/books';
import Book from './Book';
import classes from './BookList.module.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <ul className={classes.books}>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      {books.length === 0 && <p>No Book Found! Please Add New One!</p>}
    </ul>
  );
};

export default BookList;
