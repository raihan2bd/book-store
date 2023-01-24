import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeBook } from '../../redux/books/books';
import CircleProgress from '../UI/CircleProgress';
import Card from '../UI/Card';
import classes from './Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };

  const randomNum = Math.floor(Math.random() * 90 + 10);
  return (
    <li>
      <Card extraclass={classes.book} id={id}>
        <div className={classes.book_content}>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className={classes.book_actions}>
            <button type="button">Comments</button>
            <button type="button" onClick={removeBookHandler}>
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className={classes.book_progress}>
          <CircleProgress percentage={randomNum} />
          <div className={classes.book_percentage}>
            <h2>
              {randomNum}
              <span>%</span>
            </h2>
            <p>Completed</p>
          </div>
        </div>
        <div className={classes.update_progress}>
          <p>CURRENT CHAPTER</p>
          <h4>Chapter 17</h4>
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
