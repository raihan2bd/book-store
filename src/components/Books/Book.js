import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { REMOVE_BOOK } from '../../redux/books/books';
import Card from '../UI/Card';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(REMOVE_BOOK(id));
  };

  return (
    <li>
      <Card id={id}>
        <div>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="button" onClick={removeBookHandler}>
            Remove
          </button>
        </div>
        <div>Progress 80%</div>
        <div>
          <button type="button">Update Progress</button>
        </div>
      </Card>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
