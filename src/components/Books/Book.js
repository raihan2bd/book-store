import React from 'react';
import PropTypes from 'prop-types';

import Card from '../UI/Card';

const Book = ({
  id, title, author, category,
}) => (
  <li>
    <Card id={id}>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
    </Card>
  </li>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
