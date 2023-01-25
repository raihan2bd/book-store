import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { postANewBook } from '../../redux/books/books';
import Card from '../UI/Card';
import classes from './AddNewBook.module.css';

const AddNewBook = () => {
  // state
  const [title, setTitle] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [author, setAuthor] = useState('');
  const [isAuthorValid, setIsAuthorValid] = useState(true);
  const categoryRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  // handlers
  const titleChangeHandler = (event) => {
    const bookTitle = event.target.value;
    setTitle(bookTitle);
    if (bookTitle.trim().length < 3 || bookTitle.trim().length > 55) {
      setIsTitleValid(false);
    } else {
      setIsTitleValid(true);
    }
  };

  const authorChangeHandler = (event) => {
    const bookTitle = event.target.value;
    setAuthor(bookTitle);
    if (bookTitle.trim().length < 3 || bookTitle.trim().length > 25) {
      setIsAuthorValid(false);
    } else {
      setIsAuthorValid(true);
    }
  };

  const addBookHandler = (event) => {
    event.preventDefault();
    if (isFormValid) {
      dispatch(
        postANewBook({
          title: title.trim(),
          author: author.trim(),
          category: categoryRef.current.value.trim(),
        }),
      );
      // call the book reducer action to add book

      // clear inputs field
      setIsFormValid(false);
      setTitle('');
      setAuthor('');
    }
  };

  useEffect(() => {
    if (
      isTitleValid
      && isAuthorValid
      && title.trim().length !== 0
      && author.trim().length !== 0
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isTitleValid, isAuthorValid, title, author]);

  return (
    <Card extraclass={classes.form_container}>
      <h2>Add New Book</h2>
      <form onSubmit={addBookHandler} className={classes.form}>
        <div
          className={`${classes.form_control} ${
            !isTitleValid ? classes.input_invalid : ''
          }`}
        >
          <input
            id="title"
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={titleChangeHandler}
          />
          <p>{!isTitleValid && 'Book title should be 3 to 55 char long!'}</p>
        </div>
        <div
          className={`${classes.form_control} ${
            !isAuthorValid ? classes.input_invalid : ''
          }`}
        >
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={authorChangeHandler}
          />
          <p>
            {!isAuthorValid && 'Book author name should be 3 to 25 char long!'}
          </p>
        </div>
        <div className={classes.form_control}>
          <select ref={categoryRef}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div className={classes.form_action}>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </Card>
  );
};

export default AddNewBook;
