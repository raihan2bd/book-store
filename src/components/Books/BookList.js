import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookList = ({ books }) => (
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

BookList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BookList;
