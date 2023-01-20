import React from 'react';
import AddNewBook from '../components/Books/AddNewBook';

import BookList from '../components/Books/BookList';
import Card from '../components/UI/Card';

const DUMMY_BOOKS = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: '4',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const HomePage = () => {
  const removeBookHandler = () => {
    console.log('Removed');
  };
  return (
    <section>
      <Card>
        <BookList onRemoveBook={removeBookHandler} books={DUMMY_BOOKS} />
        <AddNewBook />
      </Card>
    </section>
  );
};

export default HomePage;
