import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
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

// BookList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       title: PropTypes.string,
//       author: PropTypes.string,
//       category: PropTypes.string,
//     })
//   ).isRequired,
//   onRemoveBook: PropTypes.func.isRequired,
// };

export default BookList;
