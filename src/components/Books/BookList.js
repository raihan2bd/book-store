import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchBooks } from '../../redux/books/bookActions';

import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
};

export default BookList;
