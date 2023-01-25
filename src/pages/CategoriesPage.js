import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHECK_STATUS } from '../redux/categories/categories';
import Card from '../components/UI/Card';
import classes from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(CHECK_STATUS());
  };

  let statusContent;
  if (status && status !== '') {
    statusContent = <p>{status}</p>;
  }
  return (
    <section>
      <Card extraclass={classes.container}>
        <h2>Welcome to Categories Page!</h2>
        {statusContent}
        <button type="button" onClick={checkStatusHandler}>
          Check status
        </button>
      </Card>
    </section>
  );
};

export default CategoriesPage;
