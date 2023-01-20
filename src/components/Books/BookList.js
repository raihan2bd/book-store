import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BookList = ({ books, onRemoveBook }) => (
  <ul>
    {books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        onRemoveBookHandler={onRemoveBook}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default BookList;
